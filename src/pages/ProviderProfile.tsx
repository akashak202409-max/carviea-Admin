import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { Card, CardContent } from "../components/ui/Card"
import { ChevronRight, Edit, Ban, CalendarDays, CheckCircle2, Clock, Star, Download, Eye, FileText, CheckCircle } from "lucide-react"

export function ProviderProfile() {
  return (
    <div className="space-y-6">
      <div className="flex items-center text-sm text-muted mb-4">
        <Link to="/providers" className="hover:text-brand-600 transition-colors">Providers</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-charcoal font-medium">Dr. Priya Kumar</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left column: Profile Card */}
        <div className="w-full md:w-1/3 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100">
                <div className="h-24 w-24 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-3xl mb-4">
                  PK
                </div>
                <h2 className="text-xl font-bold text-charcoal">Dr. Priya Kumar</h2>
                <p className="text-muted font-medium mt-1">MBBS, MD</p>
                <p className="text-brand-600 font-medium text-sm mt-1">General Medicine</p>
                <div className="mt-3 flex gap-2">
                  <Badge variant="success">Verified</Badge>
                  <Badge variant="success">Active</Badge>
                </div>
              </div>
              
              <div className="py-6 space-y-4 border-b border-slate-100">
                <div className="flex justify-between">
                  <span className="text-muted text-sm">Experience</span>
                  <span className="font-medium text-sm">8 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted text-sm">Location</span>
                  <span className="font-medium text-sm">Chennai</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted text-sm">Provider ID</span>
                  <span className="font-medium text-sm">DOC-1029</span>
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <Button className="w-full" variant="outline">
                  <Edit className="h-4 w-4 mr-2" /> Edit Provider
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
            {['Overview', 'Appointments', 'Patients', 'Availability', 'Documents', 'Reviews'].map((tab, i) => (
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
                <p className="text-2xl font-bold text-charcoal">324</p>
                <p className="text-xs text-muted mt-1">Total Appts</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-6 w-6 text-success mb-2" />
                <p className="text-2xl font-bold text-charcoal">286</p>
                <p className="text-xs text-muted mt-1">Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <Clock className="h-6 w-6 text-info mb-2" />
                <p className="text-2xl font-bold text-charcoal">12</p>
                <p className="text-xs text-muted mt-1">Upcoming</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <Star className="h-6 w-6 text-warning mb-2 fill-current" />
                <p className="text-2xl font-bold text-charcoal">4.8</p>
                <p className="text-xs text-muted mt-1">Rating</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-charcoal mb-4">Professional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-muted mb-2">Registration Number</h4>
                  <p className="text-sm font-medium">TMC-87654</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted mb-2">Languages</h4>
                  <p className="text-sm font-medium">English, Tamil, Hindi</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted mb-2">Consultation Fee</h4>
                  <p className="text-sm font-medium">₹499 (Online) / ₹800 (In-Clinic)</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted mb-2">Education</h4>
                  <p className="text-sm font-medium">Madras Medical College (2018)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-charcoal mb-4">Documents</h3>
              <div className="space-y-4">
                {[
                  { name: "Medical Registration Certificate", verified: true },
                  { name: "Government ID (Aadhaar)", verified: true },
                  { name: "Qualification Certificate (MD)", verified: true }
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-muted" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-charcoal">{doc.name}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {doc.verified && <CheckCircle className="h-3 w-3 text-success" />}
                          <span className="text-xs text-success font-medium">Verified</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="h-8 px-2">
                        <Eye className="h-4 w-4 mr-1" /> View
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 px-2">
                        <Download className="h-4 w-4 mr-1" /> Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
