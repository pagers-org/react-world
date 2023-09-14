export const articleKeys = {
    all: ['articles'] as const,
    lists: () => [...articleKeys.all, 'get_all_articles'] as const,
    list: (filters: any) => [...articleKeys.lists(), { filters }] as const,
};
