'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

const HeroComponent = () => {

    const imageRef = useRef();

    useEffect(() => {
        const imageElement = imageRef.current;
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;
            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled");
            } else {
                imageElement.classList.remove("scrolled");
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

  return (
    <div className="pt-40 pb-20 px-4">
        <div className='mx-auto container text-center'>
            <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>
                Manage Your Finances <br/>with Bukster
            </h1>
            <p className='twxt-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
                An AI powered finance manager that helps you keep track, analyze & optimize your expenses with real-time insights.
            </p>
            <div className='flex justify-center space-x-4'>
                <Link href="/dashboard">
                    <Button size="lg" className="px-8">
                        Get Started
                    </Button>
                </Link>
            </div>
            <div className='hero-image-wrapper'>
                <div ref={imageRef} className='hero-image'>
                    <Image 
                        src="/hero.webp"
                        alt="Hero Image"
                        width={1280}
                        height={500}
                        className="rounded-lg shadow-2xl border mx-auto"
                        priority={true}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroComponent
