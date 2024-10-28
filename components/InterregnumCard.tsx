// components/InterregnumCard.tsx
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Swords,
  Crown,
  Map,
  AlertTriangle,
  Users,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Interregnum } from "@/data/sultans";

interface InterregnumCardProps {
  period: Interregnum;
  isExpanded: boolean;
  onToggle: () => void;
}

export const InterregnumCard = ({
  period,
  isExpanded,
  onToggle,
}: InterregnumCardProps) => {
  return (
    <Card
      className={cn(
        "hover:shadow-lg transition-all duration-300",
        "border-l-4 border-l-amber-600",
        "bg-gradient-to-r from-amber-50 to-transparent"
      )}
    >
      <CardHeader
        className="cursor-pointer hover:bg-amber-50/50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between space-x-4">
          <div>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-amber-900">
                {period.title}
              </h2>
            </div>
            <p className="text-lg font-medium text-amber-700">
              {period.startYear} - {period.endYear}
            </p>
            <Badge
              variant="outline"
              className="mt-2 border-amber-200 text-amber-700"
            >
              Period of Civil War
            </Badge>
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="h-5 w-5 text-amber-600" />
                  <h3 className="text-lg font-bold text-amber-900">
                    Key Events
                  </h3>
                </div>
                <ul className="space-y-4">
                  {period.keyEvents.map((event, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Badge
                        variant="outline"
                        className="mt-1 border-amber-200"
                      >
                        {event.year}
                      </Badge>
                      <span className="text-gray-700">{event.event}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Swords className="h-5 w-5 text-amber-600" />
                  <h3 className="text-lg font-bold text-amber-900">
                    Description
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {period.description}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Crown className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-bold text-amber-900">
                  Contestants
                </h3>
              </div>
              <div className="grid gap-4">
                {period.contestants.map((contestant, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg border border-amber-200 shadow-sm"
                  >
                    <h4 className="font-bold text-amber-800">
                      {contestant.name}
                    </h4>
                    <div className="mt-2 space-y-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <Users className="h-4 w-4 text-amber-600 mt-1" />
                        <p className="text-gray-600">{contestant.claim}</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Map className="h-4 w-4 text-amber-600 mt-1" />
                        <p className="text-gray-600">{contestant.territory}</p>
                      </div>
                      <div className="mt-2">
                        <Badge
                          variant="outline"
                          className={cn(
                            "border-amber-200",
                            contestant.outcome.includes("Victory")
                              ? "text-green-600"
                              : "text-red-600"
                          )}
                        >
                          {contestant.outcome}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};
