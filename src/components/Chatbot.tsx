'use client';

import { useCompletion } from '@ai-sdk/react';
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { instituteData } from '@/lib/institute-data';

type Message = {
    id: string;
    role: 'user' | 'assistant';
    content: string;
};

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const { completion, complete, isLoading, stop, setCompletion } = useCompletion({
        api: '/api/chat',
        // @ts-ignore
        streamProtocol: 'text',
    });
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Sync completion to the last message
    useEffect(() => {
        if (completion) {
            setMessages(prev => {
                const newMessages = [...prev];
                const lastMessage = newMessages[newMessages.length - 1];
                if (lastMessage && lastMessage.role === 'assistant') {
                    // Update existing assistant message
                    newMessages[newMessages.length - 1] = {
                        ...lastMessage,
                        content: completion
                    };
                    return newMessages;
                } else if (!isLoading) {
                    // This creates a new assistant message if one doesn't exist at the end
                    // (e.g. at start of stream)
                    return [
                        ...newMessages,
                        { id: Date.now().toString(), role: 'assistant', content: completion }
                    ];
                }
                return prev;
            });
        }
    }, [completion, isLoading]);

    // When loading starts, append an empty assistant message if not present
    useEffect(() => {
        if (isLoading) {
            setMessages(prev => {
                const lastMessage = prev[prev.length - 1];
                if (!lastMessage || lastMessage.role !== 'assistant') {
                    return [
                        ...prev,
                        { id: Date.now().toString(), role: 'assistant', content: '' }
                    ];
                }
                return prev;
            });
        }
    }, [isLoading]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);

        const currentInput = input;
        setInput('');

        // Reset completion for new turn
        setCompletion('');

        await complete(currentInput);
    };

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, completion]); // Scroll on completion updates too

    if (!isMounted) return null;

    return (
        <>
            {/* Toggle Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
                    isOpen ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"
                )}
                size="icon"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
                <span className="sr-only">Toggle Chat</span>
            </Button>

            {/* Chat Window */}
            <div
                className={cn(
                    "fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl transition-all duration-300 ease-in-out border border-gray-200 overflow-hidden flex flex-col",
                    isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10 pointer-events-none"
                )}
                style={{ height: '500px', maxHeight: 'calc(100vh - 120px)' }}
            >
                {/* Header */}
                <div className="bg-blue-600 p-4 text-white flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-full">
                        <Bot className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="font-bold">BrightPath AI</h3>
                        <p className="text-xs text-blue-100">Ask me anything!</p>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.length === 0 && (
                        <div className="text-center text-gray-500 text-sm mt-8">
                            <p>Hi! I'm your AI assistant.</p>
                            <p>Ask me about courses, fees, or anything else.</p>
                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                                <button
                                    onClick={() => {
                                        const text = 'Show me the available courses.';
                                        setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: text }]);
                                        setCompletion('');
                                        complete(text);
                                    }}
                                    className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-full hover:bg-gray-100"
                                >
                                    Browse Courses
                                </button>
                                <button
                                    onClick={() => {
                                        const text = 'What is the fee structure?';
                                        setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: text }]);
                                        setCompletion('');
                                        complete(text);
                                    }}
                                    className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-full hover:bg-gray-100"
                                >
                                    Fee Structure
                                </button>
                            </div>
                        </div>
                    )}

                    {messages.map((m) => (
                        <div
                            key={m.id}
                            className={cn(
                                "flex w-full items-start space-x-2",
                                m.role === 'user' ? "flex-row-reverse space-x-reverse" : "flex-row"
                            )}
                        >
                            <div className={cn(
                                "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                                m.role === 'user' ? "bg-gray-200" : "bg-blue-100 text-blue-600"
                            )}>
                                {m.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                            </div>
                            <div
                                className={cn(
                                    "rounded-lg px-4 py-2 text-sm max-w-[80%]",
                                    m.role === 'user'
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-gray-800 border border-gray-200 shadow-sm"
                                )}
                            >
                                {m.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && !completion && (
                        <div className="flex items-center space-x-2 text-gray-500 text-sm ml-10">
                            <span className="animate-pulse">Thinking...</span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex space-x-2">
                        <input
                            className="flex-1 min-w-0 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                            disabled={isLoading}
                        />
                        <Button type="submit" size="icon" disabled={isLoading || !input?.trim()}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
