export const prescriptionKeys = {
    all: ['example_key'] as const,
    lists: () => [...prescriptionKeys.all, 'example_key_list'] as const,
    list: (filters: any) => [...prescriptionKeys.lists(), { filters }] as const,
};
