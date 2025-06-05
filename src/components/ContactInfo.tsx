import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactInfo = () => {
  const contacts = [
    {
      icon: "Mail",
      label: "Email",
      value: "ivan.vasiliev@example.com",
      href: "mailto:ivan.vasiliev@example.com",
    },
    {
      icon: "Phone",
      label: "Телефон",
      value: "+7 (999) 123-45-67",
      href: "tel:+79991234567",
    },
    {
      icon: "MapPin",
      label: "Город",
      value: "Москва, Россия",
      href: null,
    },
  ];

  return (
    <Card className="w-full max-w-md mx-auto bg-white border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Icon name="Contact" size={20} className="text-purple-600" />
          Контакты
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Icon name={contact.icon} size={18} className="text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">{contact.label}</p>
              {contact.href ? (
                <a
                  href={contact.href}
                  className="text-gray-900 hover:text-purple-600 transition-colors"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-gray-900">{contact.value}</p>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
