import { Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import React from "react";

type DetailCardProps = {
  title: string;
  value: string;
  subtext?: string;
  icon: React.ReactNode;
};

export default function DetailCard({
  title,
  value,
  subtext,
  icon,
}: DetailCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value || "N/A"}</div>
        <p className="text-xs text-gray-500">{subtext}</p>
      </CardContent>
    </Card>
  );
}
