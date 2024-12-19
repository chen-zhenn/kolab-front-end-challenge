export class Utils {

    static serializeQueryParams(queryParams: Record<string, any>) {

        const serialized = Object.keys(queryParams)
            .map(key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
            )
            .join('&')
    
      return `?${serialized}`
    }
}