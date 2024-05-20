// The square brackets in the name of the file means we can extract a value from the screen

import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import SearchInput from '../../components/SearchInput'
import EmptyState from '../../components/EmptyState'
import { searchPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'
import { useLocalSearchParams } from 'expo-router'

const Search = () => {
    const { query } = useLocalSearchParams();
    const { data: posts, refetch } = useAppwrite(() => searchPosts(query));

    useEffect(() => {
        refetch()
    }, [query])

    return (
        <SafeAreaView className="bg-primary h-full">
            {/* FlatList is used to render a list of components */}
            {/* A ScrollView would only allow vertical scrolling! */}
            <FlatList
                data={posts}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => (
                    <VideoCard video={item} />
                )}
                ListHeaderComponent={() => (
                    <View className="my-6 px-4">
                        <Text className="font-pmedium text-sm text-gray-100">
                            Search Results
                        </Text>
                        <Text className="text-2xl font-psemibold text-white">
                            {query}
                        </Text>
                        <View className="mt-6 mb-8">
                            <SearchInput initialQuery={query} />
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="No Videos Found"
                        subtitle="No videos found for this search query"
                    />
                )}
            />
        </SafeAreaView>
    )
}

export default Search