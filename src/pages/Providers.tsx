import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/Table"
import { Search, Filter, Download, Plus, MoreHorizontal } from "lucide-react"

const providers = [
  {
    id: "DOC-1029",
    name: "Dr. Priya Kumar",
    profession: "MBBS, MD",
    specialization: "General Medicine",
    experience: "8 Years",
    location: "Chennai",
    appointments: 324,
    verification: "Verified",
    status: "Active",
    avatar: "PK"
  },
  {
    id: "DOC-1030",
    name: "Dr. Rahul Sharma",
    profession: "BDS",
    specialization: "Dentist",
    experience: "12 Years",
    location: "Bangalore",
    appointments: 512,
    verification: "Verified",
    status: "Active",
    avatar: "RS"
  },
  {
    id: "DOC-1031",
    name: "Dr. Ananya Singh",
    profession: "MBBS, DGO",
    specialization: "Gynecology",
    experience: "5 Years",
    location: "Mumbai",
    appointments: 128,
    verification: "Pending",
    status: "Inactive",
    avatar: "AS"
  },
  {
    id: "DOC-1032",
    name: "Dr. Kabir Das",
    profession: "MD",
    specialization: "Cardiology",
    experience: "15 Years",
    location: "Delhi",
    appointments: 890,
    verification: "Verified",
    status: "Active",
    avatar: "KD"
  }
]

export function Providers() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-charcoal">Doctors & Providers</h1>
          <p className="text-muted mt-1">Manage healthcare professionals registered on Carevia.</p>
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Providers", value: "1,284" },
          { label: "Active Providers", value: "1,156" },
          { label: "Pending Verification", value: "48" },
          { label: "Suspended", value: "12" }
        ].map(stat => (
          <div key={stat.label} className="bg-surface border border-slate-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm font-medium text-muted">{stat.label}</p>
            <p className="text-2xl font-bold text-charcoal mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-surface p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
          <input 
            type="text" 
            placeholder="Search doctors or providers..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Provider</TableHead>
            <TableHead>Provider ID</TableHead>
            <TableHead>Profession</TableHead>
            <TableHead>Specialization</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Appointments</TableHead>
            <TableHead>Verification</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {providers.map(provider => (
            <TableRow key={provider.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-sm">
                    {provider.avatar}
                  </div>
                  <span className="font-medium">{provider.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-brand-600 font-medium">{provider.id}</TableCell>
              <TableCell>{provider.profession}</TableCell>
              <TableCell>{provider.specialization}</TableCell>
              <TableCell>{provider.experience}</TableCell>
              <TableCell>{provider.location}</TableCell>
              <TableCell>{provider.appointments}</TableCell>
              <TableCell>
                {provider.verification === "Verified" ? (
                  <Badge variant="success">Verified</Badge>
                ) : (
                  <Badge variant="warning">Pending</Badge>
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
                    <Button variant="ghost" size="sm" className="h-8 px-2 text-brand-600">View</Button>
                  </Link>
                  <Button variant="ghost" size="sm" className="h-8 px-2">Edit</Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4 text-muted" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
