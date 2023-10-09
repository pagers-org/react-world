export const extractErrorMessages = (errors: Object) =>
    Object.entries(errors).map(msg => msg.flat());
