export interface PriorityObjectI {
  label: string;
  value: string;
}

export interface StatusObjectI {
  label: string;
  value: string;
}

export interface ProjectFormValuesI {
    project_name: string;
    subtitle: string;
    description: string;
    start_date: any | "";
    end_date: any | "";
    due_date: any | "";
    priority: any;
    followers: any[]; // Update the type to the appropriate array type if needed
    team_members: any[]; // Update the type to the appropriate array type if needed
    customers: any[]; // Update the type to the appropriate array type if needed
    project_manager: any[]; // Update the type to the appropriate array type if needed
    status: any;
    attach_files: any[]; // Update the type to the appropriate array type if needed
  }