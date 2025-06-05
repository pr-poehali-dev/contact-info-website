import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProfileCard = () => {
  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-purple-50 to-indigo-50 border-0 shadow-xl">
      <CardHeader className="text-center pb-2">
        <div className="relative mx-auto mb-4">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-4xl text-white font-bold shadow-lg">
            ИВ
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white"></div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Моисеев Лев</h1>
        <p className="text-purple-600 font-medium">Frontend Developer</p>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600 text-sm leading-relaxed">
          Создаю красивые и функциональные веб-приложения. Специализируюсь на
          React и современных технологиях.
        </p>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
