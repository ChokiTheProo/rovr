import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Users } from "lucide-react";
import dashboardImage from "@/assets/fluxen-dashboard.png";

const FluxenDashboard = () => {
  const clients = [
    { name: "Carlos Silva", initials: "CS", status: "Em dia", statusColor: "text-green-400" },
    { name: "Maria Santos", initials: "MS", status: "Em dia", statusColor: "text-green-400" },
    { name: "João Oliveira", initials: "JO", status: "Atrasado", statusColor: "text-red-400" },
    { name: "Ana Costa", initials: "AC", status: "Em dia", statusColor: "text-green-400" },
  ];

  const stats = [
    { 
      label: "Total Emprestado", 
      value: "R$ 127.450", 
      change: "+12%", 
      trend: "up",
      color: "text-white" 
    },
    { 
      label: "Total Recebido", 
      value: "R$ 89.320", 
      change: "+8%", 
      trend: "up",
      color: "text-green-400" 
    },
    { 
      label: "Em Aberto", 
      value: "R$ 38.130", 
      change: "",
      trend: null,
      color: "text-yellow-400" 
    },
    { 
      label: "Inadimplência", 
      value: "R$ 5.280", 
      change: "-3%", 
      trend: "down",
      color: "text-red-400" 
    },
  ];

  return (
    <section className="py-24 bg-[#1E293B] relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Visualize seu controle financeiro
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dashboard intuitivo com todas as informações importantes
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#0F172A] rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                  <span className="font-bold text-white">F</span>
                </div>
                <span className="font-semibold text-white">Fluxen Dashboard</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1E293B] rounded-xl p-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                    {stat.change && (
                      <span className={`text-xs flex items-center gap-1 ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {stat.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {stat.change}
                      </span>
                    )}
                  </div>
                  <p className={`text-xl md:text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Chart and Clients */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Chart */}
              <div className="md:col-span-2 bg-[#1E293B] rounded-xl p-4">
                <h4 className="text-white font-medium mb-4">Fluxo Mensal</h4>
                <div className="flex items-end justify-between h-40 gap-4">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, i) => {
                    const heights = [45, 65, 55, 80, 70, 90];
                    return (
                      <div key={month} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div
                          className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${heights[i]}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        />
                        <span className="text-gray-500 text-xs">{month}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Clients List */}
              <div className="bg-[#1E293B] rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-medium">Clientes Ativos</h4>
                  <Users className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-3">
                  {clients.map((client, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 text-xs font-medium">
                          {client.initials}
                        </div>
                        <span className="text-white text-sm">{client.name}</span>
                      </div>
                      <span className={`text-xs ${client.statusColor}`}>{client.status}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FluxenDashboard;
