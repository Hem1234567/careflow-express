
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, File, FilePlus, FileText, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HealthRecordsPage = () => {
  const recentRecords = [
    {
      id: 1,
      name: 'CBC Test Report',
      date: 'May 15, 2023',
      type: 'Lab Test',
      doctor: 'Dr. Sarah Johnson'
    },
    {
      id: 2,
      name: 'X-Ray Report',
      date: 'Apr 28, 2023',
      type: 'Radiology',
      doctor: 'Dr. Michael Chen'
    },
    {
      id: 3,
      name: 'Consultation Summary',
      date: 'Apr 10, 2023',
      type: 'Consultation',
      doctor: 'Dr. Emily Rodriguez'
    }
  ];

  const prescriptions = [
    {
      id: 1,
      name: 'Antibiotic Prescription',
      date: 'May 12, 2023',
      doctor: 'Dr. Sarah Johnson',
      validUntil: 'Jun 12, 2023'
    },
    {
      id: 2,
      name: 'Pain Management',
      date: 'Apr 20, 2023',
      doctor: 'Dr. Michael Chen',
      validUntil: 'May 20, 2023'
    }
  ];

  const labTests = [
    {
      id: 1,
      name: 'Complete Blood Count',
      date: 'May 15, 2023',
      lab: 'HealthCare247 Labs',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'Lipid Profile',
      date: 'Mar 10, 2023',
      lab: 'HealthCare247 Labs',
      status: 'Completed'
    },
    {
      id: 3,
      name: 'HbA1c',
      date: 'Feb 5, 2023',
      lab: 'HealthCare247 Labs',
      status: 'Completed'
    }
  ];

  const renderRecord = (record: any) => (
    <div key={record.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-900">{record.name}</h3>
          <p className="text-sm text-gray-500">{record.date}</p>
        </div>
        <Button variant="ghost" size="sm">
          <FileText className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-2">
        <p className="text-sm"><span className="text-gray-500">Type:</span> {record.type}</p>
        <p className="text-sm"><span className="text-gray-500">Doctor:</span> {record.doctor}</p>
      </div>
    </div>
  );

  const renderPrescription = (prescription: any) => (
    <div key={prescription.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-900">{prescription.name}</h3>
          <p className="text-sm text-gray-500">{prescription.date}</p>
        </div>
        <Button variant="ghost" size="sm">
          <FileText className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-2">
        <p className="text-sm"><span className="text-gray-500">Doctor:</span> {prescription.doctor}</p>
        <p className="text-sm"><span className="text-gray-500">Valid until:</span> {prescription.validUntil}</p>
      </div>
    </div>
  );

  const renderLabTest = (test: any) => (
    <div key={test.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-900">{test.name}</h3>
          <p className="text-sm text-gray-500">{test.date}</p>
        </div>
        <Button variant="ghost" size="sm">
          <FileText className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-2">
        <p className="text-sm"><span className="text-gray-500">Lab:</span> {test.lab}</p>
        <p className="text-sm"><span className="text-gray-500">Status:</span> <span className="text-green-600">{test.status}</span></p>
      </div>
    </div>
  );

  return (
    <main className="py-8">
      <div className="healthcare-container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-healthcare-blue mb-4">Health Records</h1>
          <p className="text-gray-600">
            Manage and view all your medical records in one place.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Records</TabsTrigger>
                <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                <TabsTrigger value="lab">Lab Tests</TabsTrigger>
                <TabsTrigger value="consultations">Consultations</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Recent Records</h2>
                    <Button variant="outline" className="border-healthcare-teal text-healthcare-teal">
                      <Calendar className="mr-2 h-4 w-4" />
                      Filter by Date
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {recentRecords.map(renderRecord)}
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h2 className="text-xl font-semibold">Prescriptions</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {prescriptions.map(renderPrescription)}
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h2 className="text-xl font-semibold">Lab Tests</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {labTests.map(renderLabTest)}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="prescriptions">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">All Prescriptions</h2>
                    <Button variant="outline" className="border-healthcare-teal text-healthcare-teal">
                      <Calendar className="mr-2 h-4 w-4" />
                      Filter by Date
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {prescriptions.map(renderPrescription)}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="lab">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">All Lab Tests</h2>
                    <Button variant="outline" className="border-healthcare-teal text-healthcare-teal">
                      <Calendar className="mr-2 h-4 w-4" />
                      Filter by Date
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {labTests.map(renderLabTest)}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="consultations">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <File className="h-16 w-16 text-gray-300 mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No Consultation Records</h3>
                  <p className="text-gray-500 max-w-md mb-6">
                    You don't have any consultation records yet. Book a consultation with a doctor to get started.
                  </p>
                  <Button className="bg-healthcare-teal hover:bg-opacity-90">
                    Book a Consultation
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="md:w-1/4 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Upload Records</h3>
              <p className="text-sm text-gray-600 mb-4">
                Upload your medical records, prescriptions, and test reports to keep them organized in one place.
              </p>
              <Button className="w-full bg-healthcare-teal hover:bg-opacity-90">
                <Upload className="mr-2 h-4 w-4" />
                Upload Files
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-gray-200 hover:bg-gray-50">
                  <FilePlus className="mr-2 h-4 w-4 text-healthcare-teal" />
                  Add New Record
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-200 hover:bg-gray-50">
                  <Calendar className="mr-2 h-4 w-4 text-healthcare-teal" />
                  Book Lab Test
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-200 hover:bg-gray-50">
                  <File className="mr-2 h-4 w-4 text-healthcare-teal" />
                  View Health Reports
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HealthRecordsPage;
