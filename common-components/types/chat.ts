export enum CHAT_STATUS {
    ENDED = 'ENDED',
    OPEN = 'OPEN',
    REDIRECTED = 'REDIRECTED',
    IDLE = 'IDLE',
    VALIDATING = 'VALIDATING',
}

export enum CHAT_EVENTS {
    ANSWERED = 'answered',
    TERMINATED = 'terminated',
    CHAT_SENT_TO_CSA_EMAIL = 'chat_sent_to_csa_email',
    CLIENT_LEFT = 'client-left',
    CLIENT_LEFT_WITH_ACCEPTED = 'client_left_with_accepted',
    CLIENT_LEFT_WITH_NO_RESOLUTION = 'client_left_with_no_resolution',
    CLIENT_LEFT_FOR_UNKNOWN_REASONS = 'client_left_for_unknown_reasons',
    ACCEPTED = 'accepted',
    HATE_SPEECH = 'hate_speech',
    OTHER = 'other',
    RESPONSE_SENT_TO_CLIENT_EMAIL = 'response_sent_to_client_email',
    GREETING = 'greeting',
    REQUESTED_AUTHENTICATION = 'requested-authentication',
    AUTHENTICATION_SUCCESSFUL = 'authentication_successful',
    AUTHENTICATION_FAILED = 'authentication_failed',
    ASK_PERMISSION = 'ask-permission',
    ASK_PERMISSION_ACCEPTED = 'ask-permission-accepted',
    ASK_PERMISSION_REJECTED = 'ask-permission-rejected',
    ASK_PERMISSION_IGNORED = 'ask-permission-ignored',
    ASK_TO_FORWARD_TO_CSA = 'ask_to_forward_to_csa',
    FORWARDED_TO_BACKOFFICE = 'forwarded_to_backoffice',
    CONTINUE_CHATTING_WITH_BOT = 'continue_chatting_with_bot',
    RATING = 'rating',
    REDIRECTED = 'redirected',
    CONTACT_INFORMATION = 'contact-information',
    CONTACT_INFORMATION_REJECTED = 'contact-information-rejected',
    CONTACT_INFORMATION_FULFILLED = 'contact-information-fulfilled',
    UNAVAILABLE_CONTACT_INFORMATION_FULFILLED = 'unavailable-contact-information-fulfilled',
    CONTACT_INFORMATION_SKIPPED = 'contact-information-skipped',
    REQUESTED_CHAT_FORWARD = 'requested-chat-forward',
    REQUESTED_CHAT_FORWARD_ACCEPTED = 'requested-chat-forward-accepted',
    REQUESTED_CHAT_FORWARD_REJECTED = 'requested-chat-forward-rejected',
    UNAVAILABLE_ORGANIZATION = 'unavailable_organization',
    UNAVAILABLE_CSAS = 'unavailable_csas',
    UNAVAILABLE_CSAS_ASK_CONTACTS = 'unavailable_csas_ask_contacts',
    UNAVAILABLE_HOLIDAY = 'unavailable_holiday',
    ASSIGN_PENDING_CHAT_CSA = 'pending-assigned',
    PENDING_USER_REACHED = 'user-reached',
    PENDING_USER_NOT_REACHED = 'user-not-reached',
    USER_AUTHENTICATED = 'user-authenticated',
    READ = 'message-read',
    WAITING_VALIDATION = 'waiting_validation',
    APPROVED_VALIDATION = 'approved_validation',
}

export interface Chat {
    id: string;
    csaTitle?: string | null;
    customerSupportId?: string;
    customerSupportDisplayName?: string;
    customerSupportFirstName?: string;
    customerSupportLastName?: string;
    endUserId?: string;
    endUserEmail?: string;
    endUserPhone?: string;
    endUserFirstName?: string;
    endUserLastName?: string;
    contactsMessage?: string;
    status: CHAT_STATUS;
    created: string;
    updated: string;
    ended: string;
    lastMessage: string;
    endUserUrl?: string;
    endUserOs?: string;
    lastMessageTimestamp?: string;
    lastMessageEvent?: CHAT_EVENTS | null;
    forwardedToName?: string;
    forwardedByUser?: string;
    forwardedFromCsa?: string;
    forwardedToCsa?: string;
    receivedFrom?: string;
    comment?: string;
    commentAddedDate?: string;
    commentAuthor?: string;
    labels: string;
    feedbackText?: string;
    feedbackRating?: number;
    nps?: number;
    userDisplayName?: string;
}
export interface GroupedChat {
    myChats: Chat[];
    otherChats: {
        groupId: string;
        name: string;
        chats: Chat[];
    }[];
}

export interface GroupedPendingChat {
    newChats: Chat[];
    inProcessChats: Chat[];
    myChats: Chat[];
    otherChats: {
        groupId: string;
        name: string;
        chats: Chat[];
    }[];
}

export enum MessageSseEvent {
    READ = 'message-read',
    DELIVERED = 'message-delivered',
    PREVIEW = 'message-preview',
}

export type MessageStatus = {
    messageId: string | null;
    readTime: any;
}

export enum BACKOFFICE_NAME {
    DEFAULT = 'Bürokratt',
}
