// components/LeaderCard.tsx
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronUp,
  Users,
  Tent,
  Award,
  Swords,
  Scroll,
  Mountain,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Define the TribalLeader type
interface TribalLeader {
  id: string;
  name: string;
  reign: string;
  title: string;
  image: string;
  period: string;
  periodId: string;
  achievements: string[];
  biography: string;
  battles: string[];
  territories: string[];
  legacy: string;
  familyRelations: string;
  culturalDevelopments: string[];
  capitalCity: string;
  tribalPosition: string;
  significance: string;
  deathLocation: string;
  tribalAlliances: string;
}

interface LeaderCardProps {
  leader: TribalLeader;
  isExpanded: boolean;
  onToggle: () => void;
}

const LeaderCard: React.FC<LeaderCardProps> = ({
  leader,
  isExpanded,
  onToggle,
}) => {
  return (
    <Card
      className={cn(
        "hover:shadow-lg transition-all duration-300",
        "border-l-4",
        isExpanded ? "border-l-emerald-600" : "border-l-transparent",
        "bg-gradient-to-r from-emerald-50 to-transparent"
      )}
    >
      <CardHeader
        className="cursor-pointer hover:bg-emerald-50/50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-28 h-36 relative overflow-hidden rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-gray-200">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <p className="text-white text-xs text-center">
                    {leader.reign}
                  </p>
                </div>
              </div>
              <Badge className="absolute -top-2 -right-2 bg-emerald-600">
                Tribal Leader
              </Badge>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl font-bold text-emerald-900">
                  {leader.name}
                </h2>
                <Tent className="h-6 w-6 text-emerald-600" />
              </div>
              <p className="text-lg font-medium text-emerald-700">
                {leader.title}
              </p>
              <p className="text-sm text-emerald-600">{leader.period}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="border-emerald-200 text-emerald-700"
                >
                  <Users className="w-3 h-3 mr-1" />
                  {leader.tribalPosition}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-emerald-200 text-emerald-700"
                >
                  <Mountain className="w-3 h-3 mr-1" />
                  {leader.deathLocation}
                </Badge>
              </div>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-6 w-6 text-emerald-600" />
          ) : (
            <ChevronDown className="h-6 w-6 text-emerald-600" />
          )}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Scroll className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-lg font-bold text-emerald-900">
                    Biography
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {leader.biography}
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Award className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-lg font-bold text-emerald-900">
                    Achievements
                  </h3>
                </div>
                <ul className="space-y-2">
                  {leader.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Swords className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-lg font-bold text-emerald-900">
                    Major Battles
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {leader.battles.map((battle, index) => (
                    <li key={index}>
                      <Badge
                        variant="outline"
                        className="w-full justify-center border-emerald-200"
                      >
                        {battle}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-lg font-bold text-emerald-900">
                    Tribal Details
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <p className="text-sm font-semibold text-emerald-700">
                      Alliances
                    </p>
                    <p className="text-gray-700">{leader.tribalAlliances}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-700">
                      Significance
                    </p>
                    <p className="text-gray-700">{leader.significance}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-700">
                      Cultural Developments
                    </p>
                    <ul className="mt-1 space-y-1">
                      {leader.culturalDevelopments.map((development, index) => (
                        <li
                          key={index}
                          className="text-gray-700 flex items-start space-x-2"
                        >
                          <span className="text-emerald-500 mt-1">•</span>
                          <span>{development}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default LeaderCard;
