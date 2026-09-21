import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/Table"
import { Search, Filter, Download, Plus, MoreHorizontal } from "lucide-react"

const patients = [
  {
    id: "PAT-10284",
    name: "Arun Kumar",
    email: "arun@email.com",
    phone: "+91 98765 43210",
    age: 28,
    gender: "Male",
    appointments: 12,
    status: "Active",
    joined: "20 Sep 2026",
    avatar: "AK"
  },
  {
    id: "PAT-10285",
    name: "Sneha Patel",
    email: "sneha@email.com",
    phone: "+91 87654 32109",
    age: 34,
    gender: "Female",
    appointments: 5,
    status: "Active",
    joined: "18 Sep 2026",
    avatar: "SP"
  },
  {
    id: "PAT-10286",
    name: "Vikram Singh",
    email: "vikram@email.com",
    phone: "+91 76543 21098",
    age: 45,
    gender: "Male",
    appointments: 2,
    status: "Inactive",
    joined: "15 Sep 2026",
    avatar: "VS"
  },
  {
    id: "PAT-10287",
    name: "Neha Sharma",
    email: "neha@email.com",
    phone: "+91 65432 10987",
    age: 29,
    gender: "Female",
    appointments: 8,
    status: "Suspended",
    joined: "10 Sep 2026",
    avatar: "NS"
  }
]

export function Patients() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-charcoal">Patients</h1>
          <p className="text-muted mt-1">Manage and monitor all registered Carevia patients.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Patient
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Patients", value: "24,860" },
          { label: "Active Patients", value: "21,432" },
          { label: "New This Month", value: "1,248" },
          { label: "Inactive Patients", value: "3,428" }
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
            placeholder="Search patients..." 
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
            <TableHead className="w-12 text-center">
              <input type="checkbox" className="rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
            </TableHead>
            <TableHead>Patient</TableHead>
            <TableHead>Patient ID</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Appointments</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Joined Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map(patient => (
            <TableRow key={patient.id}>
              <TableCell className="text-center">
                <input type="checkbox" className="rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-sm">
                    {patient.avatar}
                  </div>
                  <span className="font-medium">{patient.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-brand-600 font-medium">{patient.id}</TableCell>
              <TableCell>
                <div className="text-sm">{patient.email}</div>
                <div className="text-xs text-muted mt-0.5">{patient.phone}</div>
              </TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>{patient.appointments}</TableCell>
              <TableCell>
                {patient.status === "Active" && <Badge variant="success">Active</Badge>}
                {patient.status === "Inactive" && <Badge variant="default">Inactive</Badge>}
                {patient.status === "Suspended" && <Badge variant="error">Suspended</Badge>}
              </TableCell>
              <TableCell className="text-muted">{patient.joined}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <Link to={`/patients/${patient.id}`}>
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
