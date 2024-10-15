interface ButtonProps {
  text: string;
  url: any;
  className: string;
}

const CTAButtonBlock: React.FC<ButtonProps> = ({ text, url, className }) => {
  return (
    <div className="btn--primary btn--default border-teal-950">
      <a href={url} className="btn--primary btn--default border-teal-950">
        {text}
      </a>
    </div>
  );
};

export default CTAButtonBlock;
