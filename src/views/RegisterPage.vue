<template>
    <article class="flex flex-col w-[396px] h-[299px] m-auto flex-auto pt[128px]">
        <!--text-->
        <section class="flex flex-col items-center gap-[12px] w-[396px] h-[299px] mt-[100px]">
            <p class="text-4xl font-bold mt-10 text-textPrimary-light dark:text-[#FFFFFFDE]">
                Create Account
            </p>
            <p class="text-[#3C3C3CB2] dark:text-[#EBEBEB99]">
                Already on Stage?
                <RouterLink
                    to="/login"
                    class="underline underline-offset-2 mt-[19px] text-[#213547] dark:text-[#FFFFFFDE]"
                    >Log in</RouterLink
                >
            </p>
        </section>
        <!--From-->
        <form>
            <section
                class="lex flex-col items-center flex-auto gap-[10px] w-full p-[16px] mt-0 rounded"
            >
                <input
                    type="user"
                    placeholder="Username"
                    class="input-field input-field w-full p-[10px] mt-[19px] border-[1px] rounded dark:bg-bgDark border-[#3C3C3C1F] dark:border-[#5454547A] text-[#F1F1F1] dark:text-[#EBEBEB99]"
                />
                <input
                    type="email"
                    placeholder="Email(@up.ac.th)"
                    class="input-field input-field w-full p-[10px] mt-[19px] border-[1px] rounded dark:bg-bgDark border-[#3C3C3C1F] dark:border-[#5454547A] text-[#F1F1F1] dark:text-[#EBEBEB99]"
                />
                <input
                    type="password"
                    placeholder="8 characters password"
                    class="input-field input-field w-full p-[10px] mt-[19px] border-[1px] rounded dark:bg-bgDark border-[#3C3C3C1F] dark:border-[#5454547A] text-[#F1F1F1] dark:text-[#EBEBEB99]"
                />
                <!--button-->
                <button
                    class="w-full p-[10px] mt-[26px] border-[1px] rounded bg-[#F1F1F1] dark:bg-[#2F2F2F] border-[#3C3C3C1F] dark:border-[#5454547A] text-[#3C3C3CB2] dark:text-[#EBEBEB99] hover:bg-dividerLight-light"
                >
                    Sign up to Stage
                </button>
            </section>
        </form>
    </article>
</template>
