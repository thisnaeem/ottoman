// components/Timeline.tsx
import { TRIBAL_LEADERS } from "@/data/leaders";
import { SULTANS } from "@/data/sultans";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // Add this import!

export const Timeline = () => {
  const allLeaders = [
    ...TRIBAL_LEADERS.map((leader) => ({
      ...leader,
      type: "tribal" as const,
      startYear: parseInt(leader.reign.split("-")[0]),
    })),
    ...SULTANS.map((sultan) => ({
      ...sultan,
      type: "sultan" as const,
      startYear: parseInt(sultan.reign.split("-")[0]),
    })),
  ].sort((a, b) => a.startYear - b.startYear);

  return (
    <div className="relative w-full py-8">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />

      <div className="relative">
        {allLeaders.map((leader, index) => (
          <div
            key={leader.id}
            className={cn(
              "relative mb-8",
              index % 2 === 0 ? "pr-1/2" : "pl-1/2"
            )}
          >
            {/* Timeline node */}
            <div
              className={cn(
                "absolute top-1/2 -mt-2 w-4 h-4 rounded-full",
                leader.type === "tribal" ? "bg-emerald-500" : "bg-red-500",
                index % 2 === 0 ? "right-[calc(0%-8px)]" : "left-[calc(0%-8px)]"
              )}
            />

            {/* Content */}
            <div
              className={cn(
                "relative p-4 bg-white rounded-lg shadow-md",
                index % 2 === 0 ? "mr-8" : "ml-8",
                leader.type === "tribal"
                  ? "border-l-4 border-l-emerald-500"
                  : "border-l-4 border-l-red-500"
              )}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">
                    {leader.name}
                    <Badge
                      className={cn(
                        "ml-2",
                        leader.type === "tribal"
                          ? "bg-emerald-500"
                          : "bg-red-500"
                      )}
                    >
                      {leader.type === "tribal" ? "Tribal Leader" : "Sultan"}
                    </Badge>
                  </h3>
                  <p className="text-sm text-gray-600">{leader.reign}</p>
                  <p className="text-sm text-gray-700 mt-1">{leader.title}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">{leader.capitalCity}</p>
                </div>
              </div>

              <div className="mt-2 text-sm text-gray-600 line-clamp-2">
                {leader.legacy}
              </div>

              {/* Family connections */}
              <div className="mt-2 text-xs text-gray-500">
                {leader.familyRelations}
              </div>

              {/* Additional achievements preview */}
              <div className="mt-2 flex flex-wrap gap-1">
                {leader.achievements.slice(0, 2).map((achievement, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {achievement}
                  </Badge>
                ))}
                {leader.achievements.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{leader.achievements.length - 2} more
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
