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
    <div 
      className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Photo Placeholder */}
      <div 
        className="aspect-[4/3] flex items-center justify-center"
        style={{ 
          background: 'linear-gradient(to bottom right, rgba(37, 52, 63, 0.05), rgba(255, 155, 81, 0.1))'
        }}
      >
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform"
          style={{ backgroundColor: '#BFC9D1' }}
        >
          <span 
            className="text-3xl font-bold"
            style={{ color: '#25343F' }}
          >
            {initials}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 
          className="text-lg font-semibold mb-1"
          style={{ color: '#25343F' }}
        >
          {name}
        </h3>
        <p 
          className="text-sm mb-3"
          style={{ color: '#BFC9D1' }}
        >
          {qualification}
        </p>
        
        <div 
          className="flex items-center gap-2 text-sm font-medium mb-4"
          style={{ color: '#FF9B51' }}
        >
          <span>{experience} of Experience</span>
        </div>

        <div 
          className="pt-4 border-t"
          style={{ borderColor: '#BFC9D1', opacity: 0.3 }}
        >
          <span 
            className="text-xs uppercase tracking-wider"
            style={{ color: '#BFC9D1' }}
          >
            Subjects
          </span>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {subjects.map((subject) => (
              <span
                key={subject}
                className="px-2 py-1 text-xs rounded"
                style={{ 
                  backgroundColor: '#EAEFEF',
                  color: '#25343F'
                }}
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