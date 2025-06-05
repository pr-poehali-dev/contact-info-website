import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SocialLinks = () => {
  const socials = [
    {
      name: "GitHub",
      icon: "Github",
      url: "https://github.com",
      color: "hover:bg-gray-900 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      url: "https://linkedin.com",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "Telegram",
      icon: "Send",
      url: "https://t.me",
      color: "hover:bg-blue-500 hover:text-white",
    },
    {
      name: "Twitter",
      icon: "Twitter",
      url: "https://twitter.com",
      color: "hover:bg-blue-400 hover:text-white",
    },
    {
      name: "TikTok",
      icon: "Video",
      url: "https://tiktok.com",
      color: "hover:bg-black hover:text-white",
    },
  ];

  return (
    <Card className="w-full max-w-md mx-auto bg-white border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Icon name="Users" size={20} className="text-purple-600" />
          Социальные сети
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {socials.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              className={`flex items-center gap-2 p-4 h-auto transition-all duration-200 ${social.color}`}
              asChild
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <Icon name={social.icon} size={18} />
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialLinks;
