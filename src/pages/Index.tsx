import ProfileCard from "@/components/ProfileCard";
import ContactInfo from "@/components/ContactInfo";
import SocialLinks from "@/components/SocialLinks";
import SkillsBadges from "@/components/SkillsBadges";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-[#37df0900]">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#000000]">
            Добро пожаловать в мой профиль!{" "}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Здесь вы найдете всю необходимую информацию для связи со мной
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-8">
            <ProfileCard />
            <ContactInfo />
          </div>

          <div className="space-y-8">
            <SocialLinks />
            <SkillsBadges />
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">О какой внимательный🤗</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
