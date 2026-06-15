export interface ProjectTechnology {
  name: string;
  iconPath: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: ProjectTechnology[];
  previewImagePath: string;
  dialogImagePath: string;
  githubUrl: string;
  liveUrl: string;
}