import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  Code2,
  Github,
  Linkedin,
  Twitter,
  User,
  Briefcase,
  Eye,
  BarChart2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "~/lib/supabase/server";
import { redirect } from "next/navigation";
import DetailCard from "~/components/DetailCard";
import Footer from "~/components/Footer";
import ProfileInfo from "~/components/ProfileInfo";

export default async function Dashboard() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }
  return (
    <div>
      <main className="flex-1 py-6 px-4 lg:px-8 h-screen">
        <div className="max-w-6xl mx-auto space-y-8">
          <ProfileInfo user={user} />
          <div className="grid gap-6 md:grid-cols-2">
            <DetailCard
              title={"Total Views"}
              value={"1,234"}
              subtext={"+20.1% from last month"}
              icon={<Eye className="w-4 h-4 text-gray-500" />}
            />
            <DetailCard
              title={"Projects"}
              value={"12"}
              subtext={"2 added this month"}
              icon={<Briefcase className="w-4 h-4 text-gray-500" />}
            />
          </div>
          <Tabs defaultValue="projects" className="space-y-4">
            <TabsList>
              <TabsTrigger value="projects">Recent Projects</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((project) => (
                  <Card key={project}>
                    <CardHeader>
                      <CardTitle>Project {project}</CardTitle>
                      <CardDescription>Last updated 2 days ago</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Brief description of the project goes here. It's a
                        summary of what the project is about.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                View All Projects
              </Button>
            </TabsContent>
            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="mr-2 h-2 w-2 bg-blue-500 rounded-full" />
                      <span className="flex-1">
                        Updated profile information
                      </span>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-2 w-2 bg-green-500 rounded-full" />
                      <span className="flex-1">Added a new project</span>
                      <span className="text-sm text-gray-500">1 day ago</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-2 w-2 bg-yellow-500 rounded-full" />
                      <span className="flex-1">Commented on a discussion</span>
                      <span className="text-sm text-gray-500">3 days ago</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="stats">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Profile Completeness</span>
                    <span className="font-bold">85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Projects Completed</span>
                    <span className="font-bold">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Skills Endorsed</span>
                    <span className="font-bold">37</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Avg. Project Rating</span>
                    <span className="font-bold">4.8/5</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
