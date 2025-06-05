import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const SkillsBadges = () => {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Figma",
  ];

  const interests = [
    "🎵 Музыка",
    "📚 Чтение",
    "🎮 Игры",
    "✈️ Путешествия",
    "📷 Фотография",
    "🏃‍♂️ Спорт",
  ];

  return (
    <Card className="w-full max-w-md mx-auto bg-white border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Icon name="Star" size={20} className="text-purple-600" />
          Навыки и интересы
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Технологии</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-purple-100 text-purple-700 hover:bg-purple-200"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Интересы</h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsBadges;
