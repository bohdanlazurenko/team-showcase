import type { TeamMember } from '@/types/team'

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years of experience in tech innovation and business strategy.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Full-stack architect passionate about building scalable solutions and leading technical teams.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    bio: 'Creative director specializing in user experience and creating beautiful, intuitive interfaces.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Lead Developer',
    bio: 'Senior engineer with expertise in cloud architecture and modern web technologies.',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '5',
    name: 'Jessica Taylor',
    role: 'Product Manager',
    bio: 'Strategic thinker focused on delivering products that solve real customer problems.',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '6',
    name: 'Robert Anderson',
    role: 'DevOps Engineer',
    bio: 'Infrastructure expert ensuring smooth deployment and operations across all platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '7',
    name: 'Lisa Wang',
    role: 'UX Designer',
    bio: 'User advocate dedicated to creating seamless and delightful digital experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '8',
    name: 'James Wilson',
    role: 'Backend Developer',
    bio: 'Database and API specialist building robust server-side applications.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'
  }
]

export function getTeamMembers(): TeamMember[] {
  return teamMembers
}

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id)
}