interface FacultyCardProps {
  name: string;
  initials: string;
  qualification: string;
  experience: string;
  subjects: string[];
}

const FacultyCard = ({
  name,
  initials,
  qualification,
  experience,
  subjects,
}: FacultyCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group">
      {/* Photo Placeholder */}
      <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform">
          <span className="text-3xl font-bold text-primary">{initials}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{qualification}</p>
        
        <div className="flex items-center gap-2 text-sm text-accent font-medium mb-4">
          <span>{experience} of Experience</span>
        </div>

        <div className="pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            Subjects
          </span>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {subjects.map((subject) => (
              <span
                key={subject}
                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
