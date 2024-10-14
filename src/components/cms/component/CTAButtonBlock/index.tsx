interface ButtonProps {
  text: string;
  url: any;
  className: string;
}

const CTAButtonBlock: React.FC<ButtonProps> = ({ text, url, className }) => {
  return (
    <a
      href={url}
      className="overflow-hidden relative z-10 px-12 py-7 mt-0 ml-44 text-sm font-bold tracking-wide text-white uppercase bg-cyan-900 max-md:px-5 max-md:ml-2.5"
    >
      {text}
    </a>
  );
};

export default CTAButtonBlock;
