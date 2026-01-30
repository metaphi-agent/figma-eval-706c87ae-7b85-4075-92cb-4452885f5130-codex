import { Navigate, Route, Routes } from 'react-router-dom'
import GmailFrame from './pages/GmailFrame'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/single" replace />} />
      <Route path="/single" element={<GmailFrame variant="single" defaultCompose="none" />} />
      <Route path="/multiple" element={<GmailFrame variant="multiple" defaultCompose="none" />} />
      <Route path="/subscription" element={<GmailFrame variant="subscription" defaultCompose="none" />} />
      <Route path="/single-compose" element={<GmailFrame variant="single" defaultCompose="popover" />} />
      <Route path="/single-compose-min" element={<GmailFrame variant="single" defaultCompose="popover+min" />} />
      <Route path="*" element={<Navigate to="/single" replace />} />
    </Routes>
  )
}
