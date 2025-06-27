import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CounterCardProps {
  title: string;
  count: number;
  maxCount?: number;
  description?: string;
  actionButton?: React.ReactNode;
  variant?: "default" | "percentage";
  className?: string;
  showSlotsInfo?: boolean;
  slotsAvailableText?: string;
}

function getColorsByPercentage(percentage: number) {
  if (percentage < 60) {
    return {
      bg: "bg-green-100 dark:bg-green-900/20",
      text: "text-green-800 dark:text-green-300",
      border: "border-green-200 dark:border-green-800",
    };
  }
  if (percentage < 90) {
    return {
      bg: "bg-yellow-100 dark:bg-yellow-900/20",
      text: "text-yellow-800 dark:text-yellow-300",
      border: "border-yellow-200 dark:border-yellow-800",
    };
  }
  return {
    bg: "bg-red-100 dark:bg-red-900/20",
    text: "text-red-800 dark:text-red-300",
    border: "border-red-200 dark:border-red-800",
  };
}

export function CounterCard({
  title,
  count,
  maxCount,
  actionButton,
  variant = "default",
  className = "",
  showSlotsInfo = false,
  slotsAvailableText,
  description,
}: CounterCardProps) {
  const percentage = maxCount ? (count / maxCount) * 100 : 0;
  const colors =
    variant === "percentage" && maxCount
      ? getColorsByPercentage(percentage)
      : null;

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <Card
      className={`
        flex flex-col p-4 min-h-[120px]
        transition-all duration-300 ease-out
        hover:translate-y-[-2px] hover:shadow-lg
        active:translate-y-[0px] active:shadow-md
        ${colors ? `${colors.bg} ${colors.border} border` : ""}
        ${className}
      `}
    >
      <CardHeader className="p-0 mb-1">
        <CardTitle
          className={`text-sm font-semibold ${colors ? colors.text : "text-foreground"}`}
        >
          {title}
        </CardTitle>
        {description && (
          <CardDescription
            className={`text-xs ${colors ? colors.text : "text-muted-foreground"}`}
          >
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex-1 flex flex-col items-center justify-center p-0">
        <div
          className={`text-6xl font-bold ${colors ? colors.text : "text-foreground"}`}
        >
          {formatNumber(count)}
          {maxCount && (
            <span
              className={`text-2xl font-normal ml-2 ${colors ? colors.text : "text-muted-foreground"}`}
            >
              /{formatNumber(maxCount)}
            </span>
          )}
        </div>
        {showSlotsInfo && maxCount && (
          <div
            className={`text-sm mt-2 ${colors ? colors.text : "text-muted-foreground"}`}
          >
            {formatNumber(maxCount - count)}{" "}
            {slotsAvailableText || "slots disponíveis"}
          </div>
        )}
      </CardContent>

      {actionButton && (
        <CardFooter className="flex justify-end items-center p-0 mt-2">
          {actionButton}
        </CardFooter>
      )}
    </Card>
  );
}
