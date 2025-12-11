"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Activity, Database, Server, Layers } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const ingestionData = [
  { time: "00:00", rpData: 2400, reip: 1398 },
  { time: "04:00", rpData: 1398, reip: 2800 },
  { time: "08:00", rpData: 9800, reip: 3908 },
  { time: "12:00", rpData: 3908, reip: 4800 },
  { time: "16:00", rpData: 4800, reip: 3800 },
  { time: "20:00", rpData: 3800, reip: 4300 },
  { time: "23:59", rpData: 4300, reip: 2400 },
];

export function DashboardView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">System Health</h1>
          <p className="text-gray-500">Real-time monitoring of ingestion pipelines.</p>
        </div>
        <StatusBadge status="active" label="System Operational" className="px-4 py-1.5 text-sm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "RP Data Pipeline", status: "active", icon: Database, sub: "Last sync: 2m ago" },
          { label: "REIP Feed", status: "syncing", icon: Activity, sub: "Processing: 124/s" },
          { label: "Matching Service", status: "active", icon: Layers, sub: "Confidence: 98.4%" },
          { label: "Compliance Guard", status: "restricted", icon: Server, sub: "Redacting PII" },
        ].map((item, i) => (
          <GlassCard key={i} className="flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-blue-50/50 rounded-lg text-blue-600">
                <item.icon size={20} />
              </div>
              <StatusBadge status={item.status as any} />
            </div>
            <div>
              <div className="font-semibold text-gray-900">{item.label}</div>
              <div className="text-xs text-gray-500">{item.sub}</div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2 h-[400px]">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Activity size={18} className="text-blue-500" />
            Ingestion Volume (Records/Hour)
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ingestionData}>
                <defs>
                  <linearGradient id="colorRp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorReip" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', borderRadius: '12px', border: '1px solid #e2e8f0' }}
                />
                <Area type="monotone" dataKey="rpData" stroke="#1e3a8a" strokeWidth={3} fillOpacity={1} fill="url(#colorRp)" name="RP Data" />
                <Area type="monotone" dataKey="reip" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorReip)" name="REIP Stream" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="h-[400px]">
           <h3 className="text-lg font-semibold mb-4">Pipeline Status</h3>
           <div className="space-y-4">
             {/* Simple list of statuses */}
             <div className="p-3 bg-white/50 rounded-xl border border-white/60">
               <div className="flex justify-between items-center mb-1">
                 <span className="text-sm font-medium">RP Data Daily Load</span>
                 <span className="text-xs text-emerald-600 font-bold">completed</span>
               </div>
               <div className="w-full bg-gray-100 rounded-full h-1.5">
                 <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
               </div>
             </div>
             
             <div className="p-3 bg-white/50 rounded-xl border border-white/60">
               <div className="flex justify-between items-center mb-1">
                 <span className="text-sm font-medium">REIP Realtime</span>
                 <span className="text-xs text-blue-600 font-bold">active</span>
               </div>
               <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                 <div className="bg-blue-500 h-1.5 rounded-full animate-pulse" style={{ width: '85%' }}></div>
               </div>
             </div>

             <div className="p-3 bg-white/50 rounded-xl border border-white/60">
               <div className="flex justify-between items-center mb-1">
                 <span className="text-sm font-medium">Media Processing</span>
                 <span className="text-xs text-amber-600 font-bold">backlog</span>
               </div>
               <div className="w-full bg-gray-100 rounded-full h-1.5">
                 <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
               </div>
               <p className="text-xs text-gray-400 mt-1">1,204 images queued</p>
             </div>
           </div>
        </GlassCard>
      </div>
    </div>
  );
}
