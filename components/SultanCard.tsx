import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  ChevronDown,
  ChevronUp,
  Crown,
  Book,
  Swords,
  Map,
  Flag,
  User,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Sultan } from "@/data/sultans";
import { Badge } from "@/components/ui/badge";

interface SultanCardProps {
  sultan: Sultan;
  isExpanded: boolean;
  onToggle: () => void;
}

export const SultanCard = ({
  sultan,
  isExpanded,
  onToggle,
}: SultanCardProps) => {
  return (
    <Card
      className={cn(
        "hover:shadow-lg transition-all duration-300",
        "border-l-4",
        isExpanded ? "border-l-red-500" : "border-l-transparent"
      )}
    >
      <CardHeader
        className="cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src={sultan.image}
                alt={sultan.name}
                className="w-28 h-36 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 right-0 bg-red-500 text-white px-2 py-1 text-xs rounded-tl-lg">
                {sultan.reign}
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  {sultan.name}
                </h2>
                <Crown className="h-6 w-6 text-yellow-500" />
              </div>
              <p className="text-lg font-medium text-gray-700">
                {sultan.title}
              </p>
              <p className="text-sm text-gray-500">{sultan.period}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="secondary">
                  <User className="w-3 h-3 mr-1" />
                  {sultan.familyRelations}
                </Badge>
                <Badge variant="secondary">
                  <Star className="w-3 h-3 mr-1" />
                  {sultan.capitalCity}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {isExpanded ? (
              <ChevronUp className="h-6 w-6 text-gray-400" />
            ) : (
              <ChevronDown className="h-6 w-6 text-gray-400" />
            )}
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="p-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Book className="h-5 w-5 text-blue-500" />
                  <h3 className="text-lg font-bold text-gray-900">Biography</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {sultan.biography}
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Crown className="h-5 w-5 text-yellow-500" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Key Achievements
                  </h3>
                </div>
                <ul className="space-y-2">
                  {sultan.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Swords className="h-5 w-5 text-red-500" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Major Battles
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sultan.battles.map((battle, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Badge
                        variant="outline"
                        className="w-full justify-center"
                      >
                        {battle}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Map className="h-5 w-5 text-green-500" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Territories
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sultan.territories.map((territory, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Badge
                        variant="outline"
                        className="w-full justify-center"
                      >
                        {territory}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Flag className="h-5 w-5 text-purple-500" />
                  <h3 className="text-lg font-bold text-gray-900">Legacy</h3>
                </div>
                <p className="text-gray-700">{sultan.legacy}</p>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};
