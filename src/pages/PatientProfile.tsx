import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { Card, CardContent } from "../components/ui/Card"
import { ChevronRight, Edit, Ban, CalendarDays, CheckCircle2, XCircle, Clock, IndianRupee } from "lucide-react"

export function PatientProfile() {
  return (
    <div className="space-y-6">
      <div className="flex items-center text-sm text-muted mb-4">
        <Link to="/patients" className="hover:text-brand-600 transition-colors">Patients</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-charcoal font-medium">Arun Kumar</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left column: Profile Card */}
        <div className="w-full md:w-1/3 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100">
                <div className="h-24 w-24 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-3xl mb-4">
                  AK
                </div>
                <h2 className="text-xl font-bold text-charcoal">Arun Kumar</h2>
                <p className="text-brand-600 font-medium mt-1">PAT-10284</p>
                <div className="mt-3">
                  <Badge variant="success">Active</Badge>
                </div>
              </div>
              
              <div className="py-6 space-y-4 border-b border-slate-100">
                <div className="flex justify-between">
                  <span className="text-muted text-sm">Age</span>
                  <span className="font-medium text-sm">28 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted text-sm">Gender</span>
                  <span className="font-medium text-sm">Male</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted text-sm">Blood Group</span>
                  <span className="font-medium text-sm">O+</span>
                </div>
              </div>

              <div className="py-6 space-y-4 border-b border-slate-100">
                <div className="flex flex-col">
                  <span className="text-muted text-sm mb-1">Phone</span>
                  <span className="font-medium text-sm">+91 98765 43210</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted text-sm mb-1">Email</span>
                  <span className="font-medium text-sm">arun@email.com</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted text-sm mb-1">Location</span>
                  <span className="font-medium text-sm">Chennai, Tamil Nadu</span>
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <Button className="w-full" variant="outline">
                  <Edit className="h-4 w-4 mr-2" /> Edit Patient
                </Button>
                <Button className="w-full" variant="danger">
                  <Ban className="h-4 w-4 mr-2" /> Suspend Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column: Content Tabs */}
        <div className="w-full md:w-2/3 space-y-6">
          <div className="bg-surface rounded-2xl border border-slate-200 p-1 flex overflow-x-auto">
            {['Overview', 'Appointments', 'Consultations', 'Medical History', 'Payments', 'Documents'].map((tab, i) => (
              <button 
                key={tab}
                className={`px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-colors ${
                  i === 0 ? 'bg-brand-50 text-brand-600' : 'text-muted hover:text-charcoal hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <CalendarDays className="h-6 w-6 text-brand-500 mb-2" />
                <p className="text-2xl font-bold text-charcoal">12</p>
                <p className="text-xs text-muted mt-1">Total Appts</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-6 w-6 text-success mb-2" />
                <p className="text-2xl font-bold text-charcoal">9</p>
                <p className="text-xs text-muted mt-1">Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <Clock className="h-6 w-6 text-info mb-2" />
                <p className="text-2xl font-bold text-charcoal">2</p>
                <p className="text-xs text-muted mt-1">Upcoming</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <IndianRupee className="h-6 w-6 text-warning mb-2" />
                <p className="text-2xl font-bold text-charcoal">₹4.2k</p>
                <p className="text-xs text-muted mt-1">Total Spent</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-charcoal mb-4">Medical Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-muted mb-2">Emergency Contact</h4>
                  <p className="text-sm font-medium">Rahul Kumar (Brother)</p>
                  <p className="text-sm text-muted">+91 98765 12345</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted mb-2">Allergies</h4>
                  <div className="flex gap-2">
                    <Badge variant="error">Penicillin</Badge>
                    <Badge variant="warning">Dust</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted mb-2">Medical Conditions</h4>
                  <p className="text-sm font-medium">None reported</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
