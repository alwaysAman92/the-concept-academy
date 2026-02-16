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
        <span 
          className="inline-block font-medium text-sm mb-2"
          style={{ color: '#FF9B51' }}
        >
          {subtitle}
        </span>
        <h3 
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: '#25343F' }}
        >
          {title}
        </h3>
        <p 
          className="leading-relaxed mb-6"
          style={{ color: '#25343F', opacity: 0.75 }}
        >
          {description}
        </p>

        {/* Subjects */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen 
              className="w-5 h-5"
              style={{ color: '#FF9B51' }}
            />
            <span 
              className="font-medium"
              style={{ color: '#25343F' }}
            >
              Subjects Covered
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <span
                key={subject}
                className="px-3 py-1.5 text-sm rounded-full"
                style={{ 
                  backgroundColor: '#BFC9D1',
                  color: '#25343F'
                }}
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div 
        className={`rounded-2xl p-6 md:p-8 shadow-lg ${isReversed ? "lg:order-1" : ""}`}
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <h4 
          className="font-semibold mb-6"
          style={{ color: '#25343F' }}
        >
          Course Details
        </h4>
        <div className="space-y-5">
          {courseDetails.map((detail) => (
            <div key={detail.label} className="flex items-start gap-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#FF9B51' }}
              >
                <detail.icon 
                  className="w-5 h-5"
                  style={{ color: '#25343F' }}
                />
              </div>
              <div>
                <span 
                  className="text-sm"
                  style={{ color: '#BFC9D1' }}
                >
                  {detail.label}
                </span>
                <p 
                  className="font-medium"
                  style={{ color: '#25343F' }}
                >
                  {detail.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;