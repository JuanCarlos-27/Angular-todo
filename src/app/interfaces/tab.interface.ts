export default interface Tab {
    title: TabTitles;
    active: boolean;
}

export enum TabTitles {
    All = 'All',
    Active = 'Active',
    Completed = 'Completed'
}