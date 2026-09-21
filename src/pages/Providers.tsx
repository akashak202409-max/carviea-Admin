import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/Table"
import { Search, Filter, Download, Plus, MoreHorizontal, Users, UserCheck, AlertTriangle, ShieldCheck, Ban } from "lucide-react"

const providers = [
  {
    id: "DOC-10284",
    name: "Dr. Priya Sharma",
    profession: "Homeopathy Doctor",
    specialization: "Skin & Allergy",
    experience: "8 Years",
    location: "Chennai",
    rating: "4.8",
    verification: "Verified",
    status: "Active",
    avatar: "PS"
  },
  {
    id: "DOC-10285",
    name: "Dr. Arun Kumar",
    profession: "MBBS Doctor",
    specialization: "General Medicine",
    experience: "6 Years",
    location: "Chennai",
    rating: "4.7",
    verification: "Pending",
    status: "Active",
    avatar: "AK"
  },
  {
    id: "DOC-10286",
    name: "Dr. Meena Raj",
    profession: "Physiotherapist",
    specialization: "Orthopedics & Rehab",
    experience: "5 Years",
    location: "Coimbatore",
    rating: "4.6",
    verification: "Verified",
    status: "Inactive",
    avatar: "MR"
  }
]

export function Providers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center text-sm text-muted mb-2">
        <span className="hover:text-charcoal transition-colors cursor-pointer">Management</span>
        <span className="mx-2">/</span>
        <span className="text-charcoal font-medium">Doctors & Providers</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-charcoal">Doctors & Providers</h1>
          <p className="text-muted mt-1">Manage healthcare professionals and providers registered with Carevia.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Provider
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {[
          { label: "Total Providers", value: "1,284", desc: "Registered professionals", icon: Users, color: "text-brand-600", bg: "bg-brand-50" },
          { label: "Active Providers", value: "1,126", desc: "+8.6% this month", icon: UserCheck, color: "text-success", bg: "bg-green-50" },
          { label: "Pending Verification", value: "48", desc: "Requires admin review", icon: AlertTriangle, color: "text-warning", bg: "bg-amber-50" },
          { label: "Verified Providers", value: "1,084", desc: "84.4% of providers", icon: ShieldCheck, color: "text-success", bg: "bg-green-50" },
          { label: "Suspended", value: "32", desc: "Currently inactive", icon: Ban, color: "text-error", bg: "bg-red-50" }
        ].map(stat => (
          <div key={stat.label} className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
               <div className={`h-10 w-10 rounded-lg ${stat.bg} flex items-center justify-center ${stat.color}`}>
                 <stat.icon className="h-5 w-5" />
               </div>
            </div>
            <p className="text-sm font-medium text-muted mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-charcoal">{stat.value}</p>
            <p className="text-xs text-muted mt-2">{stat.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-surface p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative w-full lg:w-[420px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
          <input 
            type="text" 
            placeholder="Search doctor, provider name, ID or phone..." 
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
          />
        </div>
        <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
          <select className="h-10 rounded-lg border border-slate-200 bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 whitespace-nowrap">
            <option>Specialization</option>
          </select>
          <select className="h-10 rounded-lg border border-slate-200 bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 whitespace-nowrap">
            <option>Provider Type</option>
          </select>
          <select className="h-10 rounded-lg border border-slate-200 bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 whitespace-nowrap">
            <option>Verification Status</option>
          </select>
          <Button variant="outline" className="whitespace-nowrap">
            <Filter className="mr-2 h-4 w-4" /> More Filters
          </Button>
        </div>
      </div>

      <div className="bg-surface rounded-2xl border border-slate-200 shadow-sm">
         <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-white rounded-t-2xl">
            <div>
               <h3 className="font-bold text-charcoal text-lg">All Providers</h3>
               <p className="text-sm text-muted">1,284 providers</p>
            </div>
            <div className="flex gap-2">
               <Button variant="outline" size="sm">Columns</Button>
            </div>
         </div>
         <Table className="border-0 rounded-none shadow-none">
            <TableHeader className="bg-slate-50">
            <TableRow>
               <TableHead className="w-12 text-center">
                  <input type="checkbox" className="rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
               </TableHead>
               <TableHead>Provider</TableHead>
               <TableHead>Provider ID</TableHead>
               <TableHead>Profession</TableHead>
               <TableHead>Specialization</TableHead>
               <TableHead>Experience</TableHead>
               <TableHead>Location</TableHead>
               <TableHead>Rating</TableHead>
               <TableHead>Verification</TableHead>
               <TableHead>Status</TableHead>
               <TableHead className="text-right">Actions</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
            {providers.map(provider => (
               <TableRow key={provider.id}>
                  <TableCell className="text-center">
                     <input type="checkbox" className="rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                  </TableCell>
                  <TableCell>
                     <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-sm">
                        {provider.avatar}
                        </div>
                        <span className="font-medium text-charcoal">{provider.name}</span>
                     </div>
                  </TableCell>
                  <TableCell className="text-muted text-sm">{provider.id}</TableCell>
                  <TableCell className="text-sm">{provider.profession}</TableCell>
                  <TableCell className="text-sm">{provider.specialization}</TableCell>
                  <TableCell className="text-sm">{provider.experience}</TableCell>
                  <TableCell className="text-sm">{provider.location}</TableCell>
                  <TableCell className="text-sm font-medium">★ {provider.rating}</TableCell>
                  <TableCell>
                     {provider.verification === "Verified" ? (
                     <Badge variant="success" className="bg-green-100 text-green-700">Verified</Badge>
                     ) : (
                     <Badge variant="warning" className="bg-amber-100 text-amber-700">Pending</Badge>
                     )}
                  </TableCell>
                  <TableCell>
                     {provider.status === "Active" ? (
                     <Badge variant="success">Active</Badge>
                     ) : (
                     <Badge variant="default">Inactive</Badge>
                     )}
                  </TableCell>
                  <TableCell className="text-right">
                     <div className="flex items-center justify-end gap-2">
                        <Link to={`/providers/${provider.id}`}>
                           <Button variant="outline" size="sm" className="h-8 px-3 text-brand-600 border-brand-200 hover:bg-brand-50">View Profile</Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                           <MoreHorizontal className="h-4 w-4 text-muted" />
                        </Button>
                     </div>
                  </TableCell>
               </TableRow>
            ))}
            </TableBody>
         </Table>
         <div className="p-4 border-t border-slate-200 flex items-center justify-between bg-white rounded-b-2xl">
            <span className="text-sm text-muted">Showing 1–10 of 1,284 providers</span>
            <div className="flex gap-1">
               <Button variant="outline" size="sm" className="px-2 text-muted">Previous</Button>
               <Button variant="outline" size="sm" className="px-3 bg-brand-50 text-brand-600 border-brand-200">1</Button>
               <Button variant="outline" size="sm" className="px-3 text-muted">2</Button>
               <Button variant="outline" size="sm" className="px-3 text-muted">3</Button>
               <Button variant="outline" size="sm" className="px-2 text-muted">Next</Button>
            </div>
         </div>
      </div>
    </div>
  )
}
