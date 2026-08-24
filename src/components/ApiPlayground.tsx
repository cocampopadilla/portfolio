import React, { useState } from 'react';
import { Play, Copy, Check, Terminal, RefreshCw, Layers, Send, ChevronDown } from 'lucide-react';
import { candidateData, ApiEndpoint } from '../data/candidateData';

export const ApiPlayground: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint>(candidateData.apiEndpoints[0]);
  const [requestBodyText, setRequestBodyText] = useState<string>(
    JSON.stringify(selectedEndpoint.requestBody || {}, null, 2)
  );
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(selectedEndpoint.responseExample);
  const [latency, setLatency] = useState<number>(24);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'response' | 'headers' | 'curl'>('response');

  const handleEndpointChange = (endpoint: ApiEndpoint) => {
    setSelectedEndpoint(endpoint);
    setRequestBodyText(JSON.stringify(endpoint.requestBody || {}, null, 2));
    setResponse(endpoint.responseExample);
  };

  const handleExecute = () => {
    setLoading(true);
    const start = performance.now();

    setTimeout(() => {
      let parsedBody = {};
      try {
        if (selectedEndpoint.method === 'POST' && requestBodyText) {
          parsedBody = JSON.parse(requestBodyText);
        }
      } catch (e) {
        // Fallback for invalid JSON input
      }

      let resData = { ...selectedEndpoint.responseExample };
      if (selectedEndpoint.id === 'ep-4' && parsedBody && Object.keys(parsedBody).length > 0) {
        resData = {
          ...resData,
          receivedPayload: parsedBody,
          timestamp: new Date().toISOString()
        };
      }

      const end = performance.now();
      setLatency(Math.round(end - start + Math.random() * 15 + 10));
      setResponse(resData);
      setLoading(false);
    }, 350);
  };

  const curlCommand = `curl -X ${selectedEndpoint.method} \\
  "https://api.adyen.com/candidate${selectedEndpoint.path}" \\
  -H "x-api-key: candidate_live_docs_key_2026" \\
  -H "Content-Type: application/json"${selectedEndpoint.method === 'POST' ? ` \\
  -d '${requestBodyText.replace(/\n/g, '')}'` : ''}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card-adyen overflow-hidden p-0 border shadow-lg" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
      {/* Header Bar */}
      <div className="p-4 border-b flex flex-wrap items-center justify-between gap-3" style={{ backgroundColor: 'var(--bg-sidebar)', borderColor: 'var(--border-color)' }}>
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-[#00A254]" />
          <div>
            <h3 className="font-bold text-sm font-mono" style={{ color: 'var(--text-heading)' }}>
              Adyen Interactive API Console
            </h3>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Test candidate data endpoints live from docs UI
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono px-2 py-1 rounded bg-[#00A254]/10 text-[#00A254] border border-[#00A254]/30 font-semibold">
            API Environment: Production
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Control Panel */}
        <div className="lg:col-span-5 p-5 border-r space-y-4" style={{ borderColor: 'var(--border-color)' }}>
          <div>
            <label className="block text-xs font-bold font-mono mb-2" style={{ color: 'var(--text-muted)' }}>
              SELECT ENDPOINT
            </label>
            <div className="space-y-1.5">
              {candidateData.apiEndpoints.map((ep) => {
                const isSelected = selectedEndpoint.id === ep.id;
                return (
                  <button
                    key={ep.id}
                    onClick={() => handleEndpointChange(ep)}
                    className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-center justify-between text-xs`}
                    style={{
                      backgroundColor: isSelected ? 'var(--color-primary-light)' : 'var(--bg-surface)',
                      borderColor: isSelected ? 'var(--color-primary)' : 'var(--border-color)',
                      color: isSelected ? 'var(--color-primary)' : 'var(--text-main)'
                    }}
                  >
                    <div className="flex items-center gap-2 font-mono">
                      <span className={ep.method === 'GET' ? 'badge-http-get' : 'badge-http-post'}>
                        {ep.method}
                      </span>
                      <span className="font-semibold truncate">{ep.path}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold mb-1" style={{ color: 'var(--text-heading)' }}>
              Endpoint Description:
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {selectedEndpoint.description}
            </p>
          </div>

          {/* POST Request Body Editor if POST */}
          {selectedEndpoint.method === 'POST' && (
            <div>
              <label className="block text-xs font-bold font-mono mb-1.5" style={{ color: 'var(--text-muted)' }}>
                REQUEST BODY (JSON)
              </label>
              <textarea
                value={requestBodyText}
                onChange={(e) => setRequestBodyText(e.target.value)}
                rows={6}
                className="w-full p-3 font-mono text-xs rounded-lg border outline-none resize-none focus:ring-1 focus:ring-[#00A254]"
                style={{
                  backgroundColor: 'var(--bg-code)',
                  color: 'var(--text-code)',
                  borderColor: 'var(--border-color)'
                }}
              />
            </div>
          )}

          {/* Send Button */}
          <button
            onClick={handleExecute}
            disabled={loading}
            className="btn-primary w-full justify-center py-2.5 text-sm"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Executing API Request...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Request ({selectedEndpoint.method} {selectedEndpoint.path})</span>
              </>
            )}
          </button>
        </div>

        {/* Right Output Console Panel */}
        <div className="lg:col-span-7 flex flex-col min-h-[350px]" style={{ backgroundColor: 'var(--bg-code)' }}>
          {/* Output Header */}
          <div className="p-3 border-b border-gray-800 flex items-center justify-between text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('response')}
                className={`px-2.5 py-1 rounded transition-colors ${activeTab === 'response' ? 'bg-emerald-600/30 text-emerald-400 font-bold border border-emerald-500/40' : 'hover:text-white'}`}
              >
                Response Body
              </button>
              <button
                onClick={() => setActiveTab('headers')}
                className={`px-2.5 py-1 rounded transition-colors ${activeTab === 'headers' ? 'bg-emerald-600/30 text-emerald-400 font-bold border border-emerald-500/40' : 'hover:text-white'}`}
              >
                Headers
              </button>
              <button
                onClick={() => setActiveTab('curl')}
                className={`px-2.5 py-1 rounded transition-colors ${activeTab === 'curl' ? 'bg-emerald-600/30 text-emerald-400 font-bold border border-emerald-500/40' : 'hover:text-white'}`}
              >
                cURL Snippet
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                {response?.status || 200} OK
              </span>
              <span className="text-gray-400">{latency} ms</span>
              <button
                onClick={() => copyToClipboard(activeTab === 'curl' ? curlCommand : JSON.stringify(response, null, 2))}
                className="p-1 text-gray-400 hover:text-white transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Content Pane */}
          <div className="flex-1 p-4 font-mono text-xs overflow-x-auto">
            {activeTab === 'response' && (
              <pre className="text-emerald-300 leading-relaxed whitespace-pre">
                {JSON.stringify(response, null, 2)}
              </pre>
            )}

            {activeTab === 'headers' && (
              <div className="space-y-1 text-slate-300">
                <p><span className="text-emerald-400">HTTP/1.1</span> 200 OK</p>
                <p><span className="text-slate-500">Date:</span> {new Date().toUTCString()}</p>
                <p><span className="text-slate-500">Content-Type:</span> application/json; charset=utf-8</p>
                <p><span className="text-slate-500">Server:</span> Adyen-Docs-Gateway/v2.4</p>
                <p><span className="text-slate-500">X-Candidate-Fit:</span> 100% Recommended</p>
                <p><span className="text-slate-500">Cache-Control:</span> no-cache</p>
              </div>
            )}

            {activeTab === 'curl' && (
              <pre className="text-sky-300 leading-relaxed whitespace-pre-wrap">
                {curlCommand}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
