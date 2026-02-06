import { Clock, Users, BookOpen, Target } from "lucide-react";

interface CourseDetail {
  icon: typeof Clock;
  label: string;
  value: string;
}

interface CourseSectionProps {
  title: string;
  subtitle: string;
  description: string;
  subjects: string[];
  details: {
    duration: string;
    batchSize: string;
    approach: string;
  };
  isReversed?: boolean;
}

const CourseSection = ({
  title,
  subtitle,
  description,
  subjects,
  details,
  isReversed = false,
}: CourseSectionProps) => {
  const courseDetails: CourseDetail[] = [
    { icon: Clock, label: "Duration", value: details.duration },
    { icon: Users, label: "Batch Size", value: details.batchSize },
    { icon: Target, label: "Approach", value: details.approach },
  ];

  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
      <div className={isReversed ? "lg:order-2" : ""}>
        <span className="inline-block text-accent font-medium text-sm mb-2">
          {subtitle}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Subjects */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-accent" />
            <span className="font-medium text-foreground">Subjects Covered</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <span
                key={subject}
                className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={`bg-card rounded-2xl p-6 md:p-8 card-shadow ${isReversed ? "lg:order-1" : ""}`}>
        <h4 className="font-semibold text-foreground mb-6">Course Details</h4>
        <div className="space-y-5">
          {courseDetails.map((detail) => (
            <div key={detail.label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <detail.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground">{detail.label}</span>
                <p className="font-medium text-foreground">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
