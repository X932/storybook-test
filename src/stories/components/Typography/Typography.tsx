import { FC, ReactNode } from "react";

type TypographyVariant =
  | "display1"
  | "display2"
  | "heading1"
  | "heading2"
  | "heading3"
  | "headingRegular"
  | "headingSubtitle"
  | "bodyBig"
  | "bodyNormal"
  | "bodyParagraph"
  | "bodySmall"
  | "allCaps"
  | "caption";

export interface ITypographyProps {
  children?: ReactNode;
  className?: string;
  variant?: TypographyVariant;
}

export const Typography: FC<ITypographyProps> = ({
  children,
  variant,
  className = "",
}) => {
  switch (variant) {
    case "caption":
      return (
        <div className={`text-0 ${className}`}>{children}</div>
      );

    case "allCaps":
      return (
        <div className={`text-1 uppercase ${className}`}>{children}</div>
      );

    case "bodySmall":
      return (
        <div className={`text-1 ${className}`}>{children}</div>
      );

    case "bodyParagraph":
      return (
        <div className={`text-3 ${className}`}>{children}</div>
      );

    case "bodyNormal":
      return (
        <div className={`text-2 ${className}`}>{children}</div>
      );

    case "bodyBig":
      return (
        <div className={`text-4 ${className}`}>
          {children}
        </div>
      );

    case "headingSubtitle":
      return (
        <div className={`text-2 font-family-bold ${className}`}>{children}</div>
      );

    case "headingRegular":
      return (
        <div className={`text-5 ${className}`}>{children}</div>
      );

    case "heading3":
      return (
        <div className={`text-4 font-family-bold ${className}`}>{children}</div>
      );

    case "heading2":
      return (
        <div className={`text-5 font-family-bold ${className}`}>{children}</div>
      );

    case "heading1":
      return (
        <div className={`text-6 font-family-bold ${className}`}>{children}</div>
      );

    case "display2":
      return (
        <div className={`text-7 font-family-bold ${className}`}>{children}</div>
      );

    case "display1":
      return (
        <div className={`text-8 font-family-bold ${className}`}>{children}</div>
      );

    default:
      return (
        <div className={className}>{children}</div>
      );
  }
};
