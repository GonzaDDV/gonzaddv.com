import {
  GitHub,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "react-feather";

interface SocialMediaItemProps {
  name: string;
  Icon: ({ size }: { size: number }) => JSX.Element;
  url: string;
  bg: string;
  text?: string;
  fontSize?: string;
}

const SocialMediaInfo: SocialMediaItemProps[] = [
  {
    name: "Twitter",
    Icon: ({ size }: { size: number }) => <Twitter size={size} />,
    url: "https://twitter.com/GonzaDDV",
    bg: "group-hover:bg-twitter",
  },

  {
    name: "YouTube",
    Icon: ({ size }: { size: number }) => <Youtube size={size} />,
    url: "https://youtube.com/@gonzaddv",
    bg: "group-hover:bg-youtube",
  },

  {
    name: "GitHub",
    Icon: ({ size }: { size: number }) => <GitHub size={size} />,
    url: "https://github.com/GonzaDDV",
    bg: "group-hover:bg-github",
  },

  {
    name: "Linkedin",
    Icon: ({ size }: { size: number }) => <Linkedin size={size} />,
    url: "https://linkedin.com/in/GonzaDDV",
    bg: "group-hover:bg-linkedin",
  },

  {
    name: "Mail",
    Icon: ({ size }: { size: number }) => <Mail size={size} />,
    url: "mailto:gonzalodiazdevivar@gmail.com",
    bg: "group-hover:bg-mail",
    text: "gonzalodiazdevivar@gmail.com",
    fontSize: "text-xs",
  },

  {
    name: "Instagram",
    Icon: ({ size }: { size: number }) => <Instagram size={size} />,
    url: "https://instagram.com/GonzaDDV",
    bg: "group-hover:bg-instagram",
  },
];

const SocialMediaItem = ({
  name,
  url,
  Icon,
  bg,
  fontSize = "text-xl",
  text = "@gonzaddv",
}: SocialMediaItemProps) => {
  return (
    <a
      key={name}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-300 cursor-pointer group overflow-hidden hover:rounded-lg transition-all"
    >
      <div
        className={`flex flex-col items-center justify-center gap-2 w-full h-full ${bg} group-hover:text-white duration-300 transition-all py-5`}
      >
        <Icon size={40} />
        <p className={`${fontSize} hidden xl:block`}>{text}</p>
      </div>
    </a>
  );
};

const SocialMedia = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {SocialMediaInfo.map((info) => (
        <SocialMediaItem {...info} key={info.name} />
      ))}
    </div>
  );
};

export default SocialMedia;
