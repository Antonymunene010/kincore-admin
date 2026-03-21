import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

import Dashboard from './pages/Dashboard';
import GovernanceRoles from './pages/GovernanceRoles';
import AddRole from './pages/AddRole';
import ContentModeration from './pages/ContentModeration';
import ClanTreeManagement from './pages/ClanTreeManagement';
import RestrictAuthor from './pages/RestrictAuthor';
import MemberRegistry from './pages/MemberRegistry';
import EventsEngagement from './pages/EventsEngagement';
import CreateEvent from './pages/CreateEvent';
import { EventProvider } from './context/EventContext';
import Mall from './pages/Mall';
import MediaRepository from './pages/MediaRepository';
import Subscription from './pages/Subscription';
import PlanFeatures from './pages/PlanFeatures';
import MigrationMap from './pages/MigrationMap';
import CreateMigrationPoint from './pages/CreateMigrationPoint';
import KCCCoin from './pages/KCCCoin';
import Reports from './pages/Reports';
import Policies from './pages/Policies';
import Support from './pages/Support';
import Settings from './pages/Settings';
import SecretSantaPreview from './pages/SecretSantaPreview';
import SecretSantaLocked from './pages/SecretSantaLocked';
import OwnerDashboard from './pages/owner/OwnerDashboard';
import GlobalMembers from './pages/owner/GlobalMembers';
import CreateBranch from './pages/owner/CreateBranch';
import { BranchProvider } from './context/BranchContext';
import GlobalBranches from './pages/owner/GlobalBranches';
import FamilyTree from './pages/owner/FamilyTree';
import AddMember from './pages/owner/AddMember';
import FamilyEvent from './pages/owner/FamilyEvent';
import CreateEventInvitee from './pages/owner/CreateEventInvitee';
import PrivacySettings from './pages/owner/PrivacySettings';
import GovernancePolicy from './pages/owner/GovernancePolicy';
import CustomLabels from './pages/owner/CustomLabels';
import AuditLogs from './pages/owner/AuditLogs';
import CouncilDashboard from './pages/council/CouncilDashboard';
import CouncilMembers from './pages/council/CouncilMembers';
import CouncilCreateBranch from './pages/council/CouncilCreateBranch';
import CouncilBranches from './pages/council/CouncilBranches';
import CouncilPrivacy from './pages/council/CouncilPrivacy';
import CouncilGovernance from './pages/council/CouncilGovernance';
import EditMember from './pages/owner/EditMember';
import EditBranch from './pages/owner/EditBranch';
import ViewProfile from './pages/owner/ViewProfile';
import EditLineage from './pages/owner/EditLineage';
import AddChild from './pages/owner/AddChild';
import AddParents from './pages/owner/AddParents';
import OwnerPlaceholder from './pages/owner/OwnerPlaceholder';
import BranchDashboard from './pages/branch/BranchDashboard';
import BranchMembers from './pages/branch/BranchMembers';
import BranchAddMember from './pages/branch/BranchAddMember';
import BranchEvents from './pages/branch/BranchEvents';
import BranchCreateEvent from './pages/branch/CreateEvent';
import BranchApprovals from './pages/branch/BranchApprovals';
import Layout from './components/layout/Layout';
import BusinessLayout from './components/layout/BusinessLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { BusinessProvider } from './context/BusinessContext';
import Unauthorized from './pages/Unauthorized';
import DashboardOverview from './pages/business/DashboardOverview';
import Organizations from './pages/business/Organizations';
import NewOrganization from './pages/business/NewOrganization';
import Billing from './pages/business/Billing';
import BillingCreatePlan from './pages/business/BillingCreatePlan';
import RefundFlow from './pages/business/RefundFlow';
import Operations from './pages/business/Operations';
import KCCGovernance from './pages/business/KCCGovernance';
import Ads from './pages/business/Ads';
import Safety from './pages/business/Safety';
import Config from './pages/business/Config';
import SystemConfig from './pages/business/SystemConfig';
import Reliability from './pages/business/Reliability';
import Audit from './pages/business/Audit';

// DevOps Pages
import DevOpsDashboard from './pages/devops/DevOpsDashboard';
import DevOpsSystemConfig from './pages/devops/SystemConfig';
import JobControl from './pages/devops/JobControl';

// Auditor Pages
import AuditorDashboard from './pages/auditor/AuditorDashboard';
import BillingView from './pages/auditor/BillingView';
import AuditorAuditLogs from './pages/auditor/AuditLogs';
import AbuseWorkflow from './pages/auditor/AbuseWorkflow';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Family Hub Routes */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/governance" element={<Layout><GovernanceRoles /></Layout>} />
        <Route path="/governance/add-role" element={<Layout><AddRole /></Layout>} />
        <Route path="/content-moderation" element={<Layout><ContentModeration /></Layout>} />
        <Route path="/clan-tree" element={<Layout><ClanTreeManagement /></Layout>} />
        <Route path="/restrict-author" element={<Layout><RestrictAuthor /></Layout>} />
        <Route path="/member-registry" element={<Layout><MemberRegistry /></Layout>} />
        <Route path="/events" element={<Layout><EventsEngagement /></Layout>} />
        <Route path="/events/create" element={<EventProvider><Layout><CreateEvent /></Layout></EventProvider>} />
        <Route path="/events/secret-santa/preview" element={<EventProvider><Layout><SecretSantaPreview /></Layout></EventProvider>} />
        <Route path="/events/secret-santa/locked" element={<EventProvider><Layout><SecretSantaLocked /></Layout></EventProvider>} />
        <Route path="/mall" element={<Layout><Mall /></Layout>} />
        <Route path="/media" element={<Layout><MediaRepository /></Layout>} />
        <Route path="/subscription" element={<Layout><Subscription /></Layout>} />
        <Route path="/subscription/features" element={<Layout><PlanFeatures /></Layout>} />
        <Route path="/migration" element={<Layout><MigrationMap /></Layout>} />
        <Route path="/migration/add" element={<Layout><CreateMigrationPoint /></Layout>} />
        <Route path="/kcc" element={<Layout><KCCCoin /></Layout>} />
        <Route path="/reports" element={<Layout><Reports /></Layout>} />
        <Route path="/policies" element={<Layout><Policies /></Layout>} />
        <Route path="/support" element={<Layout><Support /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />

        {/* Owner Dashboard Routes */}
        <Route path="/owner/dashboard" element={<Layout><OwnerDashboard /></Layout>} />
        <Route path="/owner/members" element={<Layout><GlobalMembers /></Layout>} />
        <Route path="/owner/members/edit" element={<Layout><EditMember /></Layout>} />
        <Route path="/owner/branches" element={<Layout><GlobalBranches /></Layout>} />
        <Route path="/owner/branches/create" element={<BranchProvider><Layout><CreateBranch /></Layout></BranchProvider>} />
        <Route path="/owner/branches/edit" element={<BranchProvider><Layout><EditBranch /></Layout></BranchProvider>} />
        <Route path="/owner/family-tree" element={<Layout><FamilyTree /></Layout>} />
        <Route path="/owner/add-member" element={<Layout><AddMember /></Layout>} />
        <Route path="/owner/events" element={<Layout><FamilyEvent /></Layout>} />
        <Route path="/owner/events/create" element={<Layout><CreateEventInvitee /></Layout>} />
        <Route path="/owner/privacy" element={<Layout><PrivacySettings /></Layout>} />
        <Route path="/owner/governance" element={<Layout><GovernancePolicy /></Layout>} />
        <Route path="/owner/custom-labels" element={<Layout><CustomLabels /></Layout>} />
        <Route path="/owner/audit-logs" element={<Layout><AuditLogs /></Layout>} />
        <Route path="/member-registry/view" element={<Layout><ViewProfile /></Layout>} />
        <Route path="/member-registry/edit-lineage" element={<Layout><EditLineage /></Layout>} />
        <Route path="/owner/tree/add-child" element={<Layout><AddChild /></Layout>} />
        <Route path="/owner/tree/add-parents" element={<Layout><AddParents /></Layout>} />

        {/* Family Council Routes */}
        <Route path="/council/dashboard" element={<Layout><CouncilDashboard /></Layout>} />
        <Route path="/council/members" element={<Layout><CouncilMembers /></Layout>} />
        <Route path="/council/branches" element={<Layout><CouncilBranches /></Layout>} />
        <Route path="/council/branches/create" element={<BranchProvider><Layout><CouncilCreateBranch /></Layout></BranchProvider>} />
        <Route path="/council/family-tree" element={<Layout><FamilyTree /></Layout>} />
        <Route path="/council/events" element={<Layout><FamilyEvent /></Layout>} />
        <Route path="/council/privacy" element={<Layout><CouncilPrivacy /></Layout>} />
        <Route path="/council/governance" element={<Layout><CouncilGovernance /></Layout>} />

        {/* Branch Manager Routes */}
        <Route path="/branch/dashboard" element={<Layout><BranchDashboard /></Layout>} />
        <Route path="/branch/members" element={<Layout><BranchMembers /></Layout>} />
        <Route path="/branch/members/add" element={<Layout><BranchAddMember /></Layout>} />
        <Route path="/branch/events" element={<Layout><BranchEvents /></Layout>} />
        <Route path="/branch/create-event" element={<Layout><BranchCreateEvent /></Layout>} />
        <Route path="/branch/approvals" element={<Layout><BranchApprovals /></Layout>} />


        <Route path="/owner/system" element={<Layout><OwnerPlaceholder title="System" /></Layout>} />

        {/* Business Dashboard Routes */}
        <Route
          path="/business/dashboard"
          element={
            <ProtectedRoute allowedRole="business">
              <BusinessLayout><DashboardOverview /></BusinessLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/organizations"
          element={
            <ProtectedRoute allowedRole="business">
              <BusinessProvider>
                <BusinessLayout><Organizations /></BusinessLayout>
              </BusinessProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/organizations/create"
          element={
            <ProtectedRoute allowedRole="business">
              <BusinessProvider>
                <BusinessLayout><NewOrganization /></BusinessLayout>
              </BusinessProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/billing"
          element={
            <ProtectedRoute allowedRole="business">
              <BusinessProvider>
                <BusinessLayout><Billing /></BusinessLayout>
              </BusinessProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/billing/plans/create"
          element={
            <ProtectedRoute allowedRole="business">
              <BusinessProvider>
                <BusinessLayout><BillingCreatePlan /></BusinessLayout>
              </BusinessProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/billing/refunds"
          element={
            <ProtectedRoute allowedRole="business">
              <BusinessProvider>
                <BusinessLayout><RefundFlow /></BusinessLayout>
              </BusinessProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/operations"
          element={
            <ProtectedRoute allowedRole="business">
              <BusinessLayout><Operations /></BusinessLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/governance"
          element={
            <ProtectedRoute allowedRole="business">
              <BusinessLayout><KCCGovernance /></BusinessLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/ads"
          element={
            <ProtectedRoute allowedRole="business">
              <BusinessLayout><Ads /></BusinessLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/safety"
          element={
            <ProtectedRoute allowedRole="business">
              <BusinessLayout><Safety /></BusinessLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/config"
          element={
            <ProtectedRoute allowedRole="business">
              <BusinessLayout><Config /></BusinessLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/config/system"
          element={
            <ProtectedRoute allowedRole="business">
              <BusinessProvider>
                <BusinessLayout><SystemConfig /></BusinessLayout>
              </BusinessProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/reliability"
          element={
            <ProtectedRoute allowedRole="business">
              <BusinessLayout><Reliability /></BusinessLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/audit"
          element={
            <ProtectedRoute allowedRole="business">
              <BusinessLayout><Audit /></BusinessLayout>
            </ProtectedRoute>
          }
        />

        {/* DevOps Routes */}
        <Route
          path="/devops/dashboard"
          element={
            <ProtectedRoute allowedRole="devops">
              <BusinessLayout><DevOpsDashboard /></BusinessLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/devops/config"
          element={
            <ProtectedRoute allowedRole="devops">
              <BusinessLayout><DevOpsSystemConfig /></BusinessLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/devops/jobs"
          element={
            <ProtectedRoute allowedRole="devops">
              <BusinessLayout><JobControl /></BusinessLayout>
            </ProtectedRoute>
          }
        />

        {/* Auditor Routes */}
        <Route
          path="/auditor/dashboard"
          element={
            <ProtectedRoute allowedRole="auditor">
              <BusinessLayout><AuditorDashboard /></BusinessLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auditor/billing"
          element={
            <ProtectedRoute allowedRole="auditor">
              <BusinessLayout><BillingView /></BusinessLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auditor/audit"
          element={
            <ProtectedRoute allowedRole="auditor">
              <BusinessLayout><AuditorAuditLogs /></BusinessLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auditor/abuse"
          element={
            <ProtectedRoute allowedRole="auditor">
              <BusinessLayout><AbuseWorkflow /></BusinessLayout>
            </ProtectedRoute>
          }
        />


        {/* Catch-all for Unauthorized */}
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>

  );
}

export default App;
