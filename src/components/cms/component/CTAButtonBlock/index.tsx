interface ButtonProps {
  text: string;
  url: any;
  className: string;
}

const CTAButtonBlock: React.FC<ButtonProps> = ({ text, url, className }) => {
  return (
    <a
      href={url}
      className="overflow-hidden px-12 py-6 mt-16 -mb-7 text-sm font-bold tracking-wide text-white uppercase bg-cyan-900 max-md:px-5 max-md:mt-10 max-md:mb-2.5"
    >
      {text}
    </a>
  );
};

export default CTAButtonBlock;
