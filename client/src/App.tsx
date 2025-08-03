import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ITSecurity from "@/pages/ITSecurity";
import Networking from "@/pages/Networking";
import DataManagement from "@/pages/DataManagement";
import Managed from "@/pages/Managed";
import Support from "@/pages/Support";
import Virtualization from "@/pages/Virtualization";
import Mission from "@/pages/Mission";
import Goal from "@/pages/Goal";
import CoreCompetence from "@/pages/CoreCompetence";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/it-security" component={ITSecurity} />
      <Route path="/networking" component={Networking} />
      <Route path="/data-management" component={DataManagement} />
      <Route path="/managed-services" component={Managed} />
      <Route path="/support" component={Support} />
      <Route path="/virtualization" component={Virtualization} />
      <Route path="/mission" component={Mission} />
      <Route path="/goal" component={Goal} />
      <Route path="/core-competence" component={CoreCompetence} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
