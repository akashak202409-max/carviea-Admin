import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { Search, Plus, Stethoscope, Heart, Activity, Baby, Bone, Brain, Droplet, Eye, ShieldAlert } from "lucide-react"

const specializations = [
  { name: "General Medicine", providers: 124, appointments: 2450, status: "Active", icon: Stethoscope },
  { name: "Cardiology", providers: 48, appointments: 890, status: "Active", icon: Heart },
  { name: "Dermatology", providers: 56, appointments: 1120, status: "Active", icon: Droplet },
  { name: "Pediatrics", providers: 82, appointments: 1560, status: "Active", icon: Baby },
  { name: "Orthopedics", providers: 45, appointments: 780, status: "Active", icon: Bone },
  { name: "Neurology", providers: 24, appointments: 420, status: "Active", icon: Brain },
  { name: "Ophthalmology", providers: 32, appointments: 650, status: "Active", icon: Eye },
  { name: "Psychiatry", providers: 41, appointments: 590, status: "Active", icon: Activity }
]

export function Specializations() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-charcoal">Specializations</h1>
          <p className="text-muted mt-1">Manage healthcare specializations available on Carevia.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Specialization
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Specializations", value: "24" },
          { label: "Active", value: "22" },
          { label: "Inactive", value: "2" },
          { label: "Total Providers", value: "1,284" }
        ].map(stat => (
          <div key={stat.label} className="bg-surface border border-slate-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm font-medium text-muted">{stat.label}</p>
            <p className="text-2xl font-bold text-charcoal mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {specializations.map((spec) => (
          <div key={spec.name} className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="h-12 w-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                <spec.icon className="h-6 w-6" />
              </div>
              <Badge variant={spec.status === "Active" ? "success" : "default"}>{spec.status}</Badge>
            </div>
            
            <h3 className="text-lg font-bold text-charcoal mb-1">{spec.name}</h3>
            
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Providers</span>
                <span className="font-medium text-charcoal">{spec.providers}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">Appointments</span>
                <span className="font-medium text-charcoal">{spec.appointments.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex gap-2">
              <Button variant="outline" className="flex-1">Edit</Button>
              <Button variant="outline" className="flex-1 text-error hover:bg-red-50 hover:text-red-700">Disable</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
