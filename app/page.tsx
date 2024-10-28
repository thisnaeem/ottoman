"use client";

import { useState, } from "react";
import { Search, LayoutGrid, GitBranch, Info } from "lucide-react";
import { SULTANS } from "@/data/sultans";
import { TRIBAL_LEADERS, PERIODS } from "@/data/leaders";
import LeaderCard from "@/components/LeaderCard";
import { SultanCard } from "@/components/SultanCard";
import { Timeline } from "@/components/Timeline";
import { cn } from "@/lib/utils"; // Add this import
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [view, setView] = useState<"cards" | "timeline">("cards");
  const [expandedItem, setExpandedItem] = useState<string | number | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("all");

  const stats = {
    totalYears: "744",
    totalLeaders: TRIBAL_LEADERS.length + SULTANS.length,
    majorBattles: "156",
    totalTerritories: "45",
  };

  // Filter function for both types
  const getFilteredItems = () => {
    const filterCondition = (item: any) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.period.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPeriod =
        selectedPeriod === "all" || item.periodId === selectedPeriod;

      return matchesSearch && matchesPeriod;
    };

    const filteredTribalLeaders =
      selectedPeriod === "kayi" || selectedPeriod === "all"
        ? TRIBAL_LEADERS.filter(filterCondition)
        : [];

    const filteredSultans =
      selectedPeriod === "kayi" ? [] : SULTANS.filter(filterCondition);

    return [...filteredTribalLeaders, ...filteredSultans];
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Ottoman Dynasty
            </h1>
            <p className="mt-4 text-xl text-red-100">
              From Tribal Origins to Empire: Exploring the Legacy of Ottoman
              Leadership
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
              <p className="text-2xl font-bold">{stats.totalLeaders}</p>
              <p className="text-red-100">Leaders</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
              <p className="text-2xl font-bold">{stats.totalYears}</p>
              <p className="text-red-100">Years of History</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
              <p className="text-2xl font-bold">{stats.majorBattles}</p>
              <p className="text-red-100">Major Battles</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
              <p className="text-2xl font-bold">{stats.totalTerritories}</p>
              <p className="text-red-100">Territories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* View Toggle and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
              <button
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  view === "cards"
                    ? "bg-red-500 text-white"
                    : "text-gray-500 hover:text-gray-700"
                )}
                onClick={() => setView("cards")}
              >
                <LayoutGrid className="w-4 h-4 inline-block mr-2" />
                Cards
              </button>
              <button
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  view === "timeline"
                    ? "bg-red-500 text-white"
                    : "text-gray-500 hover:text-gray-700"
                )}
                onClick={() => setView("timeline")}
              >
                <GitBranch className="w-4 h-4 inline-block mr-2" />
                Timeline
              </button>
            </div>
          </div>

          <div className="flex flex-col  sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, title, or period..."
                className="w-full h-11 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-[200px] bg-white">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                {PERIODS.map((period) => (
                  <SelectItem key={period.id} value={period.id}>
                    {period.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Period Description */}
        {selectedPeriod !== "all" && (
          <Card className="mb-8 bg-white/50 backdrop-blur">
            <CardContent className="p-4">
              <div className="flex items-start space-x-2">
                <Info className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {PERIODS.find((p) => p.id === selectedPeriod)?.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedPeriod === "kayi"
                      ? "The foundational period when the Kayı tribe, led by Suleyman Shah and Ertuğrul Gazi, established the basis for what would become the Ottoman Empire."
                      : "Major period in Ottoman history marked by significant developments in administration, military, and culture."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results Count */}
        <div className="mb-4">
          <Badge variant="outline" className="text-gray-600">
            Showing {getFilteredItems().length} results
          </Badge>
        </div>

        {/* Content */}
        {view === "timeline" ? (
          <Timeline />
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {getFilteredItems().map((item) =>
              item.id.toString().startsWith("TL") ? (
                <LeaderCard
                  key={item.id}
                  leader={item as any}
                  isExpanded={expandedItem === item.id}
                  onToggle={() =>
                    setExpandedItem(expandedItem === item.id ? null : item.id)
                  }
                />
              ) : (
                <SultanCard
                  key={item.id}
                  sultan={item as any}
                  isExpanded={expandedItem === item.id}
                  onToggle={() =>
                    setExpandedItem(expandedItem === item.id ? null : item.id)
                  }
                />
              )
            )}
          </div>
        )}

        {/* No Results */}
        {getFilteredItems().length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No results found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you&apos;re
              looking for.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            Explore the rich history of the Ottoman Dynasty from its tribal
            origins to imperial power.
          </p>
        </div>
      </footer>
    </main>
  );
}
