import { Link } from "react-router-dom"
import { useState } from "react"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { Card, CardContent } from "../components/ui/Card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/Table"
import { ChevronRight, Edit, Ban, CalendarDays, CheckCircle2, Clock, IndianRupee, Video, Download, Eye, FileText, AlertTriangle } from "lucide-react"

export function PatientProfile() {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Appointments', 'Consultations', 'Medical History', 'Payments', 'Documents'];

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
                <Button className="w-full text-brand-600 border-brand-200 hover:bg-brand-50" variant="outline">
                  <Edit className="h-4 w-4 mr-2" /> Edit Patient
                </Button>
                <Button className="w-full text-error border-error/30 hover:bg-red-50 hover:border-error" variant="outline">
                  <Ban className="h-4 w-4 mr-2" /> Suspend Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column: Content Tabs */}
        <div className="w-full md:w-2/3 space-y-6">
          <div className="bg-surface rounded-2xl border border-slate-200 p-1 flex overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-colors border ${
                  activeTab === tab 
                    ? 'bg-brand-50 text-brand-600 border-brand-200 shadow-sm' 
                    : 'bg-transparent text-muted border-transparent hover:text-charcoal hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Overview' && (
            <div className="space-y-6">
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
                        <Badge variant="error" className="bg-red-100 text-red-700">Penicillin</Badge>
                        <Badge variant="warning" className="bg-amber-100 text-amber-700">Dust</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted mb-2">Medical Conditions</h4>
                      <p className="text-sm font-medium text-charcoal">None reported</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'Appointments' && (
             <div className="space-y-6">
                <Table>
                   <TableHeader>
                      <TableRow>
                         <TableHead>Appointment ID</TableHead>
                         <TableHead>Provider</TableHead>
                         <TableHead>Date & Time</TableHead>
                         <TableHead>Type</TableHead>
                         <TableHead>Status</TableHead>
                      </TableRow>
                   </TableHeader>
                   <TableBody>
                      <TableRow>
                         <TableCell className="text-brand-600 font-medium">APT-10284</TableCell>
                         <TableCell className="font-medium">Dr. Priya Sharma</TableCell>
                         <TableCell>21 Sep 2026 <span className="text-muted text-xs block">10:00 AM</span></TableCell>
                         <TableCell>Online</TableCell>
                         <TableCell><Badge variant="success">Completed</Badge></TableCell>
                      </TableRow>
                      <TableRow>
                         <TableCell className="text-brand-600 font-medium">APT-10192</TableCell>
                         <TableCell className="font-medium">Dr. Rahul Sharma</TableCell>
                         <TableCell>15 Sep 2026 <span className="text-muted text-xs block">11:30 AM</span></TableCell>
                         <TableCell>In-Clinic</TableCell>
                         <TableCell><Badge variant="success">Completed</Badge></TableCell>
                      </TableRow>
                      <TableRow>
                         <TableCell className="text-brand-600 font-medium">APT-10042</TableCell>
                         <TableCell className="font-medium">Apollo Diagnostics</TableCell>
                         <TableCell>02 Sep 2026 <span className="text-muted text-xs block">08:00 AM</span></TableCell>
                         <TableCell>Home Sample</TableCell>
                         <TableCell><Badge variant="success">Completed</Badge></TableCell>
                      </TableRow>
                   </TableBody>
                </Table>
             </div>
          )}

          {activeTab === 'Consultations' && (
             <div className="space-y-6">
                <Table>
                   <TableHeader>
                      <TableRow>
                         <TableHead>Consultation ID</TableHead>
                         <TableHead>Doctor</TableHead>
                         <TableHead>Date</TableHead>
                         <TableHead>Duration</TableHead>
                         <TableHead>Action</TableHead>
                      </TableRow>
                   </TableHeader>
                   <TableBody>
                      <TableRow>
                         <TableCell className="text-brand-600 font-medium">CON-8472</TableCell>
                         <TableCell className="font-medium">Dr. Priya Sharma</TableCell>
                         <TableCell>21 Sep 2026</TableCell>
                         <TableCell>
                           <div className="flex items-center gap-1.5">
                             <Video className="h-4 w-4 text-muted" /> 18 min
                           </div>
                         </TableCell>
                         <TableCell>
                           <Button variant="outline" size="sm" className="h-8">View Summary</Button>
                         </TableCell>
                      </TableRow>
                   </TableBody>
                </Table>
             </div>
          )}

          {activeTab === 'Medical History' && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-charcoal mb-6">Medical Records & History</h3>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                  {[
                     { date: "21 Sep 2026", title: "Allergy update", desc: "Added Penicillin to allergy list.", icon: AlertTriangle, color: "text-error", bg: "bg-red-50" },
                     { date: "15 Sep 2026", title: "General Checkup", desc: "Consultation with Dr. Rahul Sharma. Blood pressure normal.", icon: CheckCircle2, color: "text-success", bg: "bg-green-50" },
                     { date: "02 Sep 2026", title: "Blood Test Results", desc: "Complete Blood Count (CBC) reports uploaded.", icon: FileText, color: "text-brand-600", bg: "bg-brand-50" }
                  ].map((act, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white ${act.bg} ${act.color} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10`}>
                        <act.icon className="h-4 w-4" />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                          <div className="font-bold text-charcoal">{act.title}</div>
                          <time className="font-medium text-xs text-muted">{act.date}</time>
                        </div>
                        <div className="text-sm text-muted">{act.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'Payments' && (
             <div className="space-y-6">
                <Table>
                   <TableHeader>
                      <TableRow>
                         <TableHead>Transaction ID</TableHead>
                         <TableHead>Date</TableHead>
                         <TableHead>Service</TableHead>
                         <TableHead>Amount</TableHead>
                         <TableHead>Status</TableHead>
                      </TableRow>
                   </TableHeader>
                   <TableBody>
                      <TableRow>
                         <TableCell className="text-brand-600 font-medium">TXN-98273</TableCell>
                         <TableCell>21 Sep 2026</TableCell>
                         <TableCell>Online Consultation</TableCell>
                         <TableCell className="font-semibold text-charcoal">₹500</TableCell>
                         <TableCell><Badge variant="success">Paid</Badge></TableCell>
                      </TableRow>
                      <TableRow>
                         <TableCell className="text-brand-600 font-medium">TXN-98104</TableCell>
                         <TableCell>15 Sep 2026</TableCell>
                         <TableCell>Clinic Visit</TableCell>
                         <TableCell className="font-semibold text-charcoal">₹800</TableCell>
                         <TableCell><Badge variant="success">Paid</Badge></TableCell>
                      </TableRow>
                      <TableRow>
                         <TableCell className="text-brand-600 font-medium">TXN-97842</TableCell>
                         <TableCell>02 Sep 2026</TableCell>
                         <TableCell>Lab Test Package</TableCell>
                         <TableCell className="font-semibold text-charcoal">₹2,900</TableCell>
                         <TableCell><Badge variant="success">Paid</Badge></TableCell>
                      </TableRow>
                   </TableBody>
                </Table>
             </div>
          )}

          {activeTab === 'Documents' && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-charcoal mb-4">Patient Documents & Reports</h3>
                <div className="space-y-4">
                  {[
                    { name: "CBC Test Report.pdf", date: "02 Sep 2026" },
                    { name: "Prescription_DrPriya.pdf", date: "21 Sep 2026" },
                    { name: "Past_Medical_Records.zip", date: "10 Aug 2026" }
                  ].map((doc, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-200 rounded-xl gap-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-muted" />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-charcoal">{doc.name}</p>
                          <span className="text-xs text-muted">Uploaded on {doc.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto">
                        <Button variant="outline" size="sm" className="h-8 px-3 flex-1 sm:flex-none">
                          <Eye className="h-4 w-4 mr-2" /> View
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 px-3 flex-1 sm:flex-none">
                          <Download className="h-4 w-4 mr-2" /> Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

        </div>
      </div>
    </div>
  )
}
