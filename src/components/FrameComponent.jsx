import { useMemo } from "react";

const FrameComponent = ({
  getTheInformationYouNeedT,
  getTheInformationYouNeedT1,
  propAlignSelf,
  propPadding,
}) => {
  const getTheInformationStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const textStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px] text-left text-sm text-grey-70 font-paragraph-medium-semibold">
      <div
        className="relative tracking-[-0.02em] leading-[16px]"
        style={getTheInformationStyle}
      >
        {getTheInformationYouNeedT}
      </div>
      <div
        className="self-stretch h-14 rounded-lg bg-grey-30 overflow-hidden shrink-0 flex flex-row items-center justify-between py-1.5 px-6 box-border gap-[20px] whitespace-nowrap text-xs text-shades-charcoal-black"
        style={textStyle}
      >
        <div className="relative tracking-[-0.02em] leading-[16px] font-semibold">
          {getTheInformationYouNeedT1}
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/arrowdownsline.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
