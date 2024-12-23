import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";

const customBaseQuery =async (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: Record<string, unknown>
) => {
    const baseQuery = fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL });
    try {
        const result = await baseQuery(args, api, extraOptions);
        if (result.data && typeof result.data === 'object' && 'data' in result.data) {
            result.data = (result.data as { data: unknown }).data;
        }
        return result;
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "An error occurred";
        return { error: {status: "FETCH_ERROR", error: errorMessage} };
    }
}

export const api = createApi({
    baseQuery: customBaseQuery,
    reducerPath: "api",
    tagTypes: ["Courses"],
    endpoints: (build) => ({
        getCourses: build.query<Course[], {category?: string}>({
            query: ({category}) => ({
                url: "courses",
                params: {category}
            }),
            providesTags: ["Courses"],
        }),
        getCourse: build.query<Course, string>({
            query: (id) => `courses/${id}`,
            providesTags: (result, error, id) => [{type: "Courses", id}],
        }),
}),
});

export const { useGetCoursesQuery, useGetCourseQuery } = api;
