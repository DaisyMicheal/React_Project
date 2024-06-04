import React, { useState } from 'react'
import {
  FaComment,
  FaRetweet,
  FaHeart,
  FaShare,
  FaBookmark,
} from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai'
import PostBox from './PostBox'

import TabNavigation from './TabNavigation'

const Content = () => {
  const tabs = ['For you', 'Following', 'TypeScript']
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const handleTabSelect = (tab) => {
    setSelectedTab(tab)

    console.log(`Selected tab: ${tab}`)
  }

  const getPostsForTab = () => {
    switch (selectedTab) {
      case 'For you':
        return postsForYou
      case 'Following':
        return postsFollowing
      case 'TypeScript':
        return postsTypeScript
      default:
        return postsForYou
    }
  }

  const postsForYou = [
    {
      id: 1,
      user: {
        name: 'Fabrizio Romano',
        handle: '@FabrizioRomano',
        avatar:
          'https://i.pinimg.com/564x/01/e9/1f/01e91f455063cdd24bc9c9f753c467f3.jpg',
      },
      time: '17m',
      content:
        'Chelsea goalkeeper Sharman-Lowe signs new one-year deal with an option for a further season. He’s set to go on loan next season.',
      image:
        'https://i.pinimg.com/236x/36/2e/64/362e64067f781cc6bb86075173cc7460.jpg',
      comments: 116,
      retweets: 207,
      likes: 3600,
      views: 214000,
      saved: false,
    },
    {
      id: 1,
      user: {
        name: 'Fabrizio Romano',
        handle: '@FabrizioRomano',
        avatar:
          'https://i.pinimg.com/236x/4d/fe/6f/4dfe6fdb24f8b51870f41df63f642e8b.jpg',
      },
      time: '17m',
      content:
        'Chelsea goalkeeper Sharman-Lowe signs new one-year deal with an option for a further season. He’s set to go on loan next season.',
      image:
        'https://i.pinimg.com/236x/8c/77/7a/8c777a1ab1f93c1026288ec58aa3f6df.jpg',
      comments: 116,
      retweets: 207,
      likes: 3600,
      views: 214000,
      saved: false,
    },
  ]

  const postsFollowing = [
    {
      id: 2,
      user: {
        name: 'Jane Doe',
        handle: '@janedoe',
        avatar:
          'https://i.pinimg.com/564x/7a/5b/31/7a5b310b44ca516cfd2bdbcfdf27598e.jpg',
      },
      time: '1h',
      content:
        'I brushed my teeth 6 times for k!ssing scene in ‘Water & Garri’ — Tiwa Savage.',
      image:
        'https://pbs.twimg.com/media/GOwZt3pWIAEI8rz?format=png&name=small',
      comments: 20,
      retweets: 50,
      likes: 100,
      views: 5000,
      saved: false,
    },
  ]

  const postsTypeScript = [
    {
      id: 3,
      user: {
        name: 'John Smith',
        handle: '@johnsmith',
        avatar:
          'https://i.pinimg.com/236x/71/18/62/7118621113629d2b9849d1ee269f93c9.jpg',
      },
      time: '2h',
      content: 'Embrace cringe!',
      image:
        'https://pbs.twimg.com/media/GOzbAulXoAAyn45?format=jpg&name=small',
      comments: 15,
      retweets: 25,
      likes: 80,
      views: 3000,
      saved: false,
    },
  ]

  return (
    <div className='flex flex-1 flex-col'>
      <TabNavigation tabs={tabs} onSelect={handleTabSelect} />
      <div className='flex flex-1 p-4 border-r border-gray-700 overflow-y-auto'>
        <div className='flex-1'>
          <PostBox />
          {getPostsForTab().map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes)
  const [comments, setComments] = useState(post.comments)
  const [retweets, setRetweets] = useState(post.retweets)
  const [views, setViews] = useState(post.views)
  const [saved, setSaved] = useState(post.saved)

  const handleLike = () => setLikes(likes + 1)
  const handleComment = () => setComments(comments + 1)
  const handleRetweet = () => setRetweets(retweets + 1)
  const handleView = () => setViews(views + 1)
  const handleSave = () => setSaved(!saved)

  return (
    <div className='p-4 mb-4 bg-black border-2 border-gray-700 border-solid rounded-lg'>
      <div className='flex items-center mb-2'>
        <img
          src={post.user.avatar}
          alt='Profile'
          className='w-10 h-10 rounded-full'
        />
        <div className='ml-2'>
          <div className='font-bold text-white'>{post.user.name}</div>
          <div className='text-sm text-gray-400'>
            {post.user.handle} · {post.time}
          </div>
        </div>
      </div>
      <div className='text-white mb-4'>{post.content}</div>
      {post.image && (
        <img src={post.image} alt='Post' className='rounded-lg mb-4 w-96' />
      )}
      <div className='flex justify-between text-gray-500'>
        <button onClick={handleComment} className='flex items-center space-x-1'>
          <FaComment />
          <span>{comments}</span>
        </button>
        <button onClick={handleRetweet} className='flex items-center space-x-1'>
          <FaRetweet />
          <span>{retweets}</span>
        </button>
        <button onClick={handleLike} className='flex items-center space-x-1'>
          <FaHeart />
          <span>{likes}</span>
        </button>
        <button onClick={handleView} className='flex items-center space-x-1'>
          <AiFillEye />
          <span>{views}</span>
        </button>
        <button onClick={handleSave} className='flex items-center space-x-1'>
          <FaBookmark className={saved ? 'text-yellow-500' : ''} />
        </button>
        <button className='flex items-center space-x-1'>
          <FaShare />
        </button>
      </div>
    </div>
  )
}

export default Content
