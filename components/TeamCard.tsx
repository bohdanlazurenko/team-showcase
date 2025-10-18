import type { TeamMember } from '@/types/team'

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="aspect-square relative overflow-hidden bg-gray-200">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-indigo-600 mb-3">
          {member.role}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {member.bio}
        </p>
      </div>
    </div>
  )
}